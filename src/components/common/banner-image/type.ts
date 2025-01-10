import { StaticImageData } from "next/image";

export type Props = {
  src: string | StaticImageData;
  alt: string;
  className?: string;
  srcVersions?: { src: StaticImageData; className: string; alt: string }[];
};
