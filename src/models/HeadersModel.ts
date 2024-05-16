import { File } from '@models/GenericModel';

interface Header {
  fields?: {
    buttonName?: string;
    description?: string;
    name?: string;
    profilePicture?: File;
    title?: string;
  };
}

export interface Headers {
  items?: Header[];
}
