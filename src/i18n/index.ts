import en from './en';
import fr from './fr';

export type id = {
  [key: string]: string | undefined;
};

interface locale {
  [key: string]: id;
}

const locales: locale = {
  en,
  fr,
};

export default locales;
