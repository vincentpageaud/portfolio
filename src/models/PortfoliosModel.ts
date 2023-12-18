import { Document } from '@contentful/rich-text-types';

import { File } from '@models/GenericModel';

export interface Project {
  fields: {
    description?: Document;
    git?: string;
    logo?: File;
    preview?: File;
    tags?: string[];
    title?: string;
    type: string;
    website?: string;
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
