export interface ExperienceValue {
  Title: string;
  Company: string;
  Location: string;
  Info: string;
  Skills: string[];
}

export interface ProjectsValue {
  Name: string;
  Info: string;
  Tools: string[];
  GithubLink: string;
}

export interface AboutMeValue {
  Title: string;
  link?: string;
  data: string;
}
