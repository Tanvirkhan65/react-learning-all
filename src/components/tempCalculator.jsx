export const onCelsius = (temperature) => {
  return ((temperature - 32) * 5) / 9;
};
export const onFahrenheit = (temperature) => {
  return (temperature * 9) / 5 + 32;
};
export const Convert = (temperature, convertTo) => {
  const value = parseFloat(temperature);
  if (Number.isNaN(value)) {
    return '';
  }
  const output = convertTo(value);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
};
