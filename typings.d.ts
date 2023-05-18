import { StaticImageData } from "next/image";

export interface ProjectInterface {
  roles: string[];
  technologies: object[];
  phoneFrame: StaticImageData;
  macFrame: StaticImageData;
  title: string;
  gitLink?: string;
  link?: string;
  contribution: number;
  personalProject: boolean | undefined;
  description: string | undefined;
}
