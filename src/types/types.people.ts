import { StaticImageData } from "next/image";

export interface PersonType {
  id: number;
  src: StaticImageData;
  alt: string;
  name: string;
}
