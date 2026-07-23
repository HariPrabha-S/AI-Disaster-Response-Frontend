export const formatNumber = (num) => {
  if (num === null || num === undefined) return '';
  return new Intl.NumberFormat().format(num);
};
