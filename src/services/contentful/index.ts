import { createClient } from 'contentful';

const isPreview = process.env.NODE_ENV === 'development';

const client = createClient({
  space: process.env.CF_SPACE_ID || '',
  accessToken: (isPreview ? process.env.CF_PREVIEW_ACCESS_TOKEN : process.env.CF_DELIVERY_ACCESS_TOKEN) || '',
  host: isPreview ? 'preview.contentful.com' : 'cdn.contentful.com',
});

export default client;
