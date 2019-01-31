import express from 'express';
let router = express.Router();
router = express.Router({
  caseSensitive: false
});
let location = [1, 1];
let shiftLocation = [2, 0];
const eggJson = {
  "noEggs": 2,
  "maxFloor": 10,
  "isEggDestroyed": [1]
};

import  * as onDeemandService  from './../controllers/onDeemandService';
import  * as userControllerService  from './../controllers/userControllerService';

router.get('/onDeemandService/puzzle', (req,res)=> {
  return onDeemandService.puzzleSolved(res,location,shiftLocation);
});

router.get('/onDeemandService/eggDropingPuzzle', (req,res)=> {
  return onDeemandService.eggDroppingPuzzle(res,eggJson);
});

router.get('/onDeemandService/getCountryByCode', (req,res)=> {
  return onDeemandService.getCountriesCode(res);
});
router.get('/onDeemandService/getCurrencyRate', (req,res)=> {
  return onDeemandService.getCurrencyRate(res);
});
router.get('/onDeemandService/getConvertCurenciesAmount', (req,res)=> {
  return onDeemandService.getConvertCurenciesAmount(req,res);
});

router.post('/onDeemandService/sendmail/', (req,res)=> {
  return onDeemandService.sendMail(req,res);
});
router.post('/userControllerService/userLogin', (req,res)=> {
  return userControllerService.userLogin(req,res);
});
router.post('/userControllerService/userRegister', (req,res)=> {
  return userControllerService.userRegister(req,res);
});

module.exports = router;
