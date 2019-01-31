import * as chessPuzzle from '../dataLayer/chessPuzzle';
import * as mailByBody from '../dataLayer/mailByBody';
import * as getCodeCountries from '../dataLayer/currencyEvaluate';

const puzzleSolved = (res, location, shiftLocation) => {
  let newLogic = true;
  if (newLogic) {
    chessPuzzle.myLogic(location, shiftLocation)
      .then((response) => {
        res.status(200).json({
          data: response.data
        });
      })
      .catch((err) => {
        res.status(404).json({
          data: err.data
        });
      });
  }
}
const sendMail = (req, res) => {
  mailByBody.sendMail(req)
    .then((response) => {
      res.status(200).json({
        data: response.data
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(404).json({
        data1: err
      });
    });
}
const eggDroppingPuzzle = (res, eggJson) => {
  chessPuzzle.eggDropping(eggJson)
    .then((response) => {
      res.status(200).json({
        data: response.data
      });
    })
    .catch((err) => {
      res.status(404).json({
        data: err.data
      });
    });
}
const getCountriesCode = (res) => {
  getCodeCountries.getCountries('CAD').then((countries) => {
      res.status(200).json({
        data: countries
      })
    })
    .catch((err) => {
      res.status(404).json({
        data: err.data
      });
    });
}
const getCurrencyRate = (res) => {
  getCodeCountries.getExchangeRate('USD', 'CAD').then((rate) => {
      res.status(200).json({
        data: rate
      })
    })
    .catch((err) => {
      res.status(404).json({
        data: err.data
      });
    });
}
const getConvertCurenciesAmount = (req,res) => {
  getCodeCountries.convertCurencies(req).then((rate) => {
      res.status(200).json({
        Price: rate
      })
    })
    .catch((err) => {
      res.status(404).json({
        data: err.data
      });
    });
}
export {
  puzzleSolved,
  sendMail,
  eggDroppingPuzzle,
  getCountriesCode,
  getCurrencyRate,
  getConvertCurenciesAmount
};
