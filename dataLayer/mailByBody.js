const sendMail = (req) => {
  return new Promise((resolve, rejects) => {
    let sendMailId = req.query.mailid;
    //let subject = req.body.subject;
    //let bodyMessage = req.body.bodymessage;
    //console.log(req.query.mailid);
    console.log(req.body);
    //console.log(sendMailId,subject,bodyMessage,req);
    if (sendMailId != undefined) {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      let isEmailValid = re.test(String(sendMailId).toLowerCase());
      if (isEmailValid) {
        const transporter = nodemailer.createTransport({
          service: 'Gmail',
          auth: {
            user: 'kshyatisekhar@gmail.com',
            pass: 'Sanjita07$',
          }
        })
        let mailOptions = {
          from: 'kshyatisekhar@gmail.com',
          to: 'kshyatisekhar@gmail.com',
          subject: 'CSV Files Data',
          text: `You have a new submission with the following bellow details....` + `Email:` + `Message:cdcd`,
          html: `<p>You got a new submission with the following details...</p><ul><li>Name:` + `Paban` + `</li><li>Email:` + 15 + `</li><li>Message:` + `Hello` + `</li></ul>`
        };
        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            return reject({
              data: error
            });
          } else {
            return resolve({
              data: 'Message Sent:' + info.response
            });
          }
        });
      } else {
        return resolve({
          data: `Invalid Email Address.`
        });
      }
    } else {
      return resolve({
        data: `Email is missing.`
      });
    }
  })
}
export {
  sendMail
};
