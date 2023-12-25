import { Document } from '@contentful/rich-text-types';

import { File } from '@models/GenericModel';

interface Skill {
  fields?: {
    title?: string;
    summary?: Document;
    frontEndTags?: string[];
    backEndTags?: string[];
    cv?: File;
  };
}

export interface Skills {
  items?: Skill[];
}
