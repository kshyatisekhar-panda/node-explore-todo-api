const axios = require('axios');

const getExchangeRate = async (from, to) => {
  const response = await axios.get('http://data.fixer.io/api/latest?access_key=d32d75de5146611ae7f23de0782ac09b');
  const euro = 1 / response.data.rates[from];
  const rate = euro * response.data.rates[to];
  return rate;
};

const getCountries = async (currencyCode) => {
  const response = await axios.get(`https://restcountries.eu/rest/v2/currency/${currencyCode}`);
  return response.data.map((country) => country.name);
};

const convertCurencies = async (req) => {
  let from = req.query.fromCurrency;
  let to = req.query.toCurrency;
  let amount = req.query.amountConvertFor;
  const rate = await getExchangeRate(from, to);
  const country = await getCountries(to);
  return `The total amount is ${amount}.
  The converted amount is ${amount * rate} for ${country}`;

};


export {
  getCountries,
  getExchangeRate,
  convertCurencies
};
