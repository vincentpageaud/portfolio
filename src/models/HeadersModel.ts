import { File } from '@models/GenericModel';

interface Header {
  fields: {
    buttonName: string;
    name: string;
    profilePicture: File;
    title: string;
  };
}

export interface Headers {
  items: Header[];
}
