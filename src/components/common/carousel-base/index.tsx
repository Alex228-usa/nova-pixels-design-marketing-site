import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { CarouselBaseItemProps, CarouselBaseProps } from "./type";
import clsx from "clsx";

export const CarouselItemBase = ({
  children,
  className,
  onClick,
}: CarouselBaseItemProps) => {
  return (
    <CarouselItem
      className={clsx("pl-1 md:basis-1/2 lg:basis-1/3", className)}
      onClick={onClick}
    >
      {children}
    </CarouselItem>
  );
};
const CarouselBase = ({ children, className }: CarouselBaseProps) => {
  return (
    <Carousel className={clsx("w-full", className)} opts={{ loop: true }}>
      <CarouselContent className="-ml-1">{children}</CarouselContent>
    </Carousel>
  );
};

export default CarouselBase;
