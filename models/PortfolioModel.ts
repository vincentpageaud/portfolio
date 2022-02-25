export interface Links {
  website?: string;
  git?: {
    host: string;
    url: string;
  };
}

export interface Description {
  language?: string;
  contents?: string;
}

export interface PortfolioModel {
  name: string;
  logoUrl: string;
  coverUrl: string;
  type: 'Full stack' | 'Front end' | 'Back end';
  tags: string[];
  description: Description[];
  links?: Links;
}
