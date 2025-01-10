import { StaticImageData } from "next/image";

export interface ServiceType {
  id: string;
  title: string;
  description: string;
  details: string;
  categoryId: string;
  subServices?: {
    title: string;
    description: string;
  }[];
  thumbnail: StaticImageData;
  showcaseImage: StaticImageData;
  bannerImage: StaticImageData;
  // link: string;
}
