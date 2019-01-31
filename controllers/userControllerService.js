import * as userService from '../dataLayer/userHelper';

const userLogin = (req, res) => {
  userService.login(req).then((response) => {
    res.status(200).json({
        status:200,
        data: response
      });
    })
    .catch((err) => {
      res.status(404).json({
        status:404,
        data: err
      });
    });
}
const userRegister = (req, res) => {
  userService.Register(req).then((response) => {
    res.status(200).json({
        status:200,
        data: response
      });
    })
    .catch((err) => {
      res.status(404).json({
        status:404,
        data: err
      });
    });
}

export {
  userLogin,
  userRegister
}
