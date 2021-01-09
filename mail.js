const nodemailer =require('nodemailer')
const {google} = require('googleapis')

const CLIENT_ID = process.env.CLIENT_ID
const CLIENT_SECRET = process.env.CLIENT_SECRET
const REDIRECT_URI = process.env.REDIRECT_URI
const REFRESH_TOKEN = process.env.REFRESH_TOKEN


const oAuth2Client = new google.auth.OAuth2(CLIENT_ID,CLIENT_SECRET,REDIRECT_URI)
oAuth2Client.setCredentials({ refresh_token : REFRESH_TOKEN})

const sendMail = async(email,cb) =>{
    try {
      const accessToken = await oAuth2Client.getAccessToken()
      const transport = nodemailer.createTransport({
          service : 'gmail',
          auth :{
              type : 'OAuth2',
              user : 'gyaualswell@gmail.com',
              clientId : CLIENT_ID,
              clientSecret : CLIENT_SECRET,
              refreshToken : REFRESH_TOKEN,
              accessToken : accessToken
          }
      })
      const mailOptions = {
          from: 'Beauty-B <gyaualswell@gmail.com>',
          to : email,
          subject : 'Hi from Beauty-B using API',
          text : 'First time using google API',
          html : '<h1>First time using google API</h1>'
      };

      const result = await transport.sendMail(mailOptions,function(err,result){
          if(err){
              cb(err,null)
          }else{
              cd(null,result)
          }
      })
      return result
      
    } catch (error) {
      return error  
    }
}

// sendMail()
// .then((result)=> console.log('Email sent ....',result))
// .catch((error)=> console.log(error.message));

module.exports = sendMail;