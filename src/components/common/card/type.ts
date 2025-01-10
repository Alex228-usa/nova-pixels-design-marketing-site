import { StaticImageData } from "next/image";

export type Props = {
    src: string | StaticImageData;
    alt: string;
    className?: string;
    title?: string;
    fields?: string[];
    imgClassName?: string;
    titleClassName?: string;
    titleBoxClassName?: string;
};
