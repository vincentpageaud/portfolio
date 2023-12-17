export interface Image {
  fields: {
    file: {
      description: string;
      url: string;
      title: string;
    };
  };
}

export interface Description {
  language?: string;
  contents?: string | string[];
  title?: string;
  url?: string;
}
