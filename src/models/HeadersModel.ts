import { Image } from '@models/GenericModel';

interface Header {
  fields: {
    buttonName: string;
    name: string;
    profilePicture: Image;
    title: string;
  };
}

export interface Headers {
  items: Header[];
}
