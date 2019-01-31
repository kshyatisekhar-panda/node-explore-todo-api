import express from 'express';
import db from './assets/db';
import middle from './routes/middle';
import bodyParser from 'body-parser';
import cors from 'cors';
// Set up the express app
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

var corsOptions = {
  origin: true
};
app.use(cors(corsOptions));
// app.use( (req, res)=> {
//   var headers = {};

//   //set header to handle the CORS
//   headers['Access-Control-Allow-Origin'] = '*';
//   headers['Access-Control-Allow-Headers'] = 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With, ApiTestKey';
//   headers['Access-Contrl-Allow-Methods'] = 'PUT, POST, GET, DELETE, OPTIONS';
//   headers["Access-Control-Max-Age"] = '86400';
//   headers['Access-Control-Allow-Credentials'] = true;
//   res.writeHead(200, headers);

//    if ( req.method === 'OPTIONS' ) {
//       console.log('OPTIONS SUCCESS');
//   }
//   else {
//       //other requests
//   }
// });

// get all todos
app.post('/Ok', (req, res) => {
  console.log(req);
  res.status(200).send({
    success: 'true',
    message: 'Mydata retrieved successfully'+ req.query.id +req.body.id,
    mydata: db
  })
});
app.use('/api', middle);
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
});
export  { app };

