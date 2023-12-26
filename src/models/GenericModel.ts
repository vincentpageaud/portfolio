export interface File {
  fields?: {
    title?: string;
    file?: {
      description?: string;
      url?: string;
    };
  };
}

export interface Description {
  language?: string;
  contents?: string | string[];
  title?: string;
  url?: string;
}

export interface Link {
  fields?: {
    title?: string;
    url?: string;
  };
}
