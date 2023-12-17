import { Document, Link } from '@contentful/rich-text-types';

import { Image } from '@models/GenericModel';

export interface Project {
  fields: {
    description?: Document;
    links?: Link[];
    logo?: Image;
    preview?: Image;
    tags?: string[];
    title?: string;
    type: string;
  };
  sys: {
    id: string;
  };
}

interface Portfolio {
  fields: {
    title: string;
    references: Project[];
  };
}

export interface Portfolios {
  items: Portfolio[];
}
