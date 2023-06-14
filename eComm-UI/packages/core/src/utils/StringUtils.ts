export const currencyConverter = (
  value: string | number,
  currency: string = '$',
  suffix: string = '.00'
): string => {
  return `${currency}${value}${suffix}`;
};
