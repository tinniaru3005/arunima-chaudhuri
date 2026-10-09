/** A run of text where some pieces can be links. */
export type RichPart = string | { text: string; href: string };
export type Rich = RichPart[];

export interface LinkItem {
  label: string;
  href: string;
}

export interface Job {
  role: string;
  org: string;
  when: string;
  points: Rich[];
}

export interface CardItem {
  title: string;
  body?: string;
  tag: string;
  href: string;
  cta: string;
}

export interface Role {
  role: string;
  org: string;
  when: string;
  body: string;
  links?: LinkItem[];
}

export interface Talk {
  title: string;
  venue: string;
  href?: string;
}

export interface Achievement {
  title: string;
  detail: Rich;
}

export interface Degree {
  degree: string;
  school: string;
  when: string;
  score: string;
}

export type HobbyIcon = 'coffee' | 'bag' | 'steps' | 'waves' | 'cat';

export interface Hobby {
  icon: HobbyIcon;
  title: string;
  body: string;
}
