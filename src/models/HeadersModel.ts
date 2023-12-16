interface Header {
  fields: {
    buttonName: string;
    name: string;
    profilePicture: {
      fields: {
        file: {
          url: string;
        };
        title: string;
      };
    };
    title: string;
  };
}

export interface Headers {
  items: Header[];
}
