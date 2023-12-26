import { Link } from '@models/GenericModel';

interface Footer {
  fields?: {
    title?: string;
    socialNetworks?: Link[];
    navigationMenu?: Link[];
  };
}

export interface Footers {
  items?: Footer[];
}
