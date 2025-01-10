import { checkIntersection } from "line-intersect";

interface Point {
    x: number;
    y: number;
}

interface Segment {
    a: Point;
    b: Point;
}

interface RaycasterOptions {
    segments: Segment[];
}

export class Raycaster {
    private uniquePoints: Point[];
    private segments: Segment[] = [];

    constructor({ segments }: RaycasterOptions) {
        this.uniquePoints = [];
        this.setSegments(segments);
    }

    setSegments(segments: Segment[]) {
        const uniquePoints = segments.reduce<Point[]>((arr, curr) => {
            for (const point of Object.values(curr)) {
                if (!arr.some((p) => p.x === point.x && p.y === point.y)) {
                    arr.push(curr.a, curr.b);
                }
            }
            return arr;
        }, []);

        const intersections = segments.reduce<Point[]>((acc, curr) => {
            for (const segment of segments) {
                const intersection = checkIntersection(
                    curr.a.x,
                    curr.a.y,
                    curr.b.x,
                    curr.b.y,
                    segment.a.x,
                    segment.a.y,
                    segment.b.x,
                    segment.b.y
                );

                if (
                    intersection.type === "intersecting" &&
                    !acc.some(
                        (i) =>
                            i.x === intersection.point.x &&
                            i.y !== intersection.point.y
                    )
                ) {
                    acc.push({
                        x: intersection.point.x,
                        y: intersection.point.y,
                    });
                }
            }
            return acc;
        }, []);

        this.uniquePoints = [...intersections, ...uniquePoints];
        this.segments = segments;
    }

    private createRay(x: number, y: number, angle: number): Segment {
        const dx = Math.cos(angle);
        const dy = Math.sin(angle);

        return {
            a: { x, y },
            b: { x: x + dx, y: y + dy },
        };
    }

    private getIntersection(ray: Segment, segment: Segment) {
        const r_px = ray.a.x;
        const r_py = ray.a.y;
        const r_dx = ray.b.x - ray.a.x;
        const r_dy = ray.b.y - ray.a.y;

        const s_px = segment.a.x;
        const s_py = segment.a.y;
        const s_dx = segment.b.x - segment.a.x;
        const s_dy = segment.b.y - segment.a.y;

        if (r_dx * s_dy === r_dy * s_dx) {
            return null;
        }

        const T2 =
            (r_dx * (s_py - r_py) + r_dy * (r_px - s_px)) /
            (s_dx * r_dy - s_dy * r_dx);
        const T1 = (s_py + s_dy * T2 - r_py) / r_dy;

        if (T1 < 0) return null;
        if (T2 < 0 || T2 > 1) return null;

        return {
            x: r_px + r_dx * T1,
            y: r_py + r_dy * T1,
            param: T1,
        };
    }

    emit(x: number, y: number) {
        const uniqueAngles: number[] = [];

        for (let i = 0; i < this.uniquePoints.length; i++) {
            const point = this.uniquePoints[i];
            const angle = Math.atan2(point.y - y, point.x - x);
            uniqueAngles.push(angle - 0.0001, angle, angle + 0.0001);
        }

        const intersects: Array<Point & { angle: number }> = [];

        for (let i = 0; i < uniqueAngles.length; i++) {
            const angle = uniqueAngles[i];
            const ray = this.createRay(x, y, angle);
            let closestIntersect: (Point & { param: number }) | null = null;

            for (let j = 0; j < this.segments.length; j++) {
                const segment = this.segments[j];
                const intersect = this.getIntersection(ray, segment);

                if (!intersect) continue;

                if (
                    !closestIntersect ||
                    intersect.param < closestIntersect.param
                ) {
                    closestIntersect = intersect;
                }
            }

            if (!closestIntersect) continue;
            intersects.push({ ...closestIntersect, angle });
        }

        return intersects.sort((a, b) => a.angle - b.angle);
    }
}

export function boundingBoxToSegments(bbox: DOMRect): Segment[] {
    return [
        {
            a: { x: bbox.x, y: bbox.y },
            b: { x: bbox.x + bbox.width, y: bbox.y },
        },
        {
            a: { x: bbox.x + bbox.width, y: bbox.y },
            b: { x: bbox.x + bbox.width, y: bbox.y + bbox.height },
        },
        {
            a: { x: bbox.x + bbox.width, y: bbox.y + bbox.height },
            b: { x: bbox.x, y: bbox.y + bbox.height },
        },
        {
            a: { x: bbox.x, y: bbox.y + bbox.height },
            b: { x: bbox.x, y: bbox.y },
        },
    ];
}
