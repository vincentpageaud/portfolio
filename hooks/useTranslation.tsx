import React from 'react';
import { useRouter } from 'next/router';

import locales from 'i18n';

const useTranslation = (id: string): string => {
  const [translation, setTranslation] = React.useState('');
  const { locale, defaultLocale } = useRouter();

  React.useEffect(() => {
    const dictionary = locales[locale ?? defaultLocale ?? 'en'];

    setTranslation(dictionary[id] ?? id);
  }, [locale, defaultLocale, id]);

  console.log(translation);
  return translation;
};

export default useTranslation;
