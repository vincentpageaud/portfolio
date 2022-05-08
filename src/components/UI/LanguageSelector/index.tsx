import { useRouter } from 'next/router';
import Link from 'next/link';

import styles from '@styles/UI/LanguageSelector.module.scss';
import locales from '@i18n';

const LanguageSelector = (): React.ReactElement => {
  const { locale: currentLocale } = useRouter();
  const localesList = Object.keys(locales);

  return (
    <div className={styles.container}>
      <div>
        {localesList.map((locale, index) => {
          return (
            <span key={locale}>
              <Link href="/" passHref locale={locale}>
                <span>
                  <span className={currentLocale === locale ? styles.active : styles.default}>
                    {locale.toUpperCase()}
                  </span>
                  {index !== localesList.length - 1 && ' | '}
                </span>
              </Link>
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default LanguageSelector;
