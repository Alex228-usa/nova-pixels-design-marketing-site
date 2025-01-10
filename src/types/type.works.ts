import { StaticImageData } from "next/image";

export interface WorkHeroType {
  url: StaticImageData;
  alt: string;
}

export interface WorkAboutType {
  id: string;
  title: string;
  description: string;
  details: {
    lineOfBusiness: string;
    photos: string;
    deliveredServices: string[];
  };
  featuredImage: WorkHeroType[];
}

export interface WorkProcessType {
  id: string;
  title: string;
  description: string;
  hero: WorkHeroType;
  featuredImage: WorkHeroType[];
}

export interface Metric {
  label: string;
  value: number;
  suffix: string;
}

export interface WorkResultType {
  id: string;
  title: string;
  hero: WorkHeroType;
  metrics: Metric[];
  featuredImage: WorkHeroType[];
}

export interface Project {
  id: string;
  title: string;
  hero: WorkHeroType;
  lastHero: WorkHeroType;
  about: WorkAboutType;
  process: WorkProcessType;
  result: WorkResultType;
}

export interface WorkType {
  id: string;
  title: string;
  categoryId: string;
  category: string;
  tags: string[];
  image: StaticImageData;
  type: string;
  project: Project;
}
