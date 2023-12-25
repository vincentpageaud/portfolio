import { createClient } from 'contentful';

import ContentType from '@enums/ContentType';

const isPreview = process.env.NODE_ENV === 'development' || process.env.VERCEL_ENV === 'preview';

const client = createClient({
  space: process.env.CF_SPACE_ID || '',
  accessToken: (isPreview ? process.env.CF_PREVIEW_ACCESS_TOKEN : process.env.CF_DELIVERY_ACCESS_TOKEN) || '',
  host: isPreview ? 'preview.contentful.com' : 'cdn.contentful.com',
});

export const fetchHeaders = async (locale?: string) => {
  const result = await client.getEntries({
    locale: locale,
    content_type: ContentType.header,
  });

  return result;
};

export const fetchPortfolios = async (locale?: string) => {
  const result = await client.getEntries({
    locale: locale,
    content_type: ContentType.portfolio,
  });

  return result;
};

export const fetchSkills = async (locale?: string) => {
  const result = await client.getEntries({
    locale: locale,
    content_type: ContentType.skills,
  });

  return result;
};

export const fetchFooters = async (locale?: string) => {
  const result = await client.getEntries({
    locale: locale,
    content_type: ContentType.footer,
  });

  return result;
};

export default client;
