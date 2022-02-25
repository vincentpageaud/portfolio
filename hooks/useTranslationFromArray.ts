import React from 'react';
import { useRouter } from 'next/router';

import { Description } from 'models/PortfolioModel';

const useTranslationFromArray = (array: Description[]): Description => {
  const [localizedArray, setLocalizedArray] = React.useState<Description>({});
  const { locale, defaultLocale } = useRouter();

  React.useEffect(() => {
    // With current locale
    let dictionary = array.find((description) => description.language?.toLocaleLowerCase() === locale);

    // Fallback default locale
    if (dictionary === undefined)
      dictionary = array.find((description) => description.language?.toLocaleLowerCase() === defaultLocale);

    // Fallback 'en' locale
    if (dictionary === undefined)
      dictionary = array.find((description) => description.language?.toLocaleLowerCase() === 'en');

    setLocalizedArray(dictionary ?? { contents: 'An error occured' });
  }, [locale, defaultLocale, array, localizedArray]);

  return localizedArray;
};

export default useTranslationFromArray;
