import numbro from 'numbro';

export const setCurrencyLocales = () => {
  let numbroLanguages = require('numbro/dist/languages.min.js');
  Object.values(numbroLanguages).forEach((each: any) =>
    numbro.registerLanguage(each),
  );

  //  this usually changes based on the locale or the type of currency
  numbro.setLanguage('it-IT');
};

type options = {
  mantissa: number;
  currencyPosition: 'postfix' | 'prefix' | 'infix' | undefined;
  spaceSeparated: boolean;
};
export const currencyForamttingOptions: options = {
  mantissa: 2,
  currencyPosition: 'postfix',
  spaceSeparated: true,
};
