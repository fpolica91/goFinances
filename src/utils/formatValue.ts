const formatValue = (value: number): string =>
  Intl.NumberFormat('USD', { style: 'currency', currency: 'USD' }).format(
    value,
  ); // TODO

export default formatValue;
