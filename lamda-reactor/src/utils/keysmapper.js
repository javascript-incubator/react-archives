export const keysMapper = (rates, dafaultRate) =>
  Object.keys(rates).map(x => ({ text: x, value: x })).concat({ text: dafaultRate, value: dafaultRate });

export const xchangeMapper = rates =>
  Object.keys(rates).map(x => ({ label: x, value: rates[x] }));
