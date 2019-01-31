import fs from 'fs';
import MongoClient from '../connections/myMongo';
const userDetails = [{
    "user": "admin@gtl.com",
    "password": "827ccb0eea8a706c4c34a16891f84e7b"
  },
  //{ "user": "admin@gtl.com", "password": "gtl12345" }
];
const login = async (req) => {
  let userName = req.body.username;
  let password = req.body.password;

  let loginResult = userDetails.filter(item => (item.user == userName && item.password == password));
  console.log(loginResult);
  //return loginResult;
  if (loginResult.length > 0) {
    return "Successful";
  } else {
    return "Please provide right credentials";
  }
};

const Register = async (req) => {
  console.log(req.body);
  let tmp_values = req.body;
  tmp_values = JSON.stringify(tmp_values);
  console.table(tmp_values);
  //return tmp_values;
  fs.writeFile('./assets/user.json', tmp_values,  (err)=> {
    if (err) {
      throw err;
    }
    console.log(`Saved`);
  });
  return `Successfully Saved` ;
  //return loginResult;
  // if (loginResult.length > 0) {
  //   return "Successful";
  // } else {
  //   return "Please provide right credentials";
  // }
};
export {
  login,
  Register
};
