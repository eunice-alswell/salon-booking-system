const nodemailer =require('nodemailer')
const {google} = require('googleapis')

const CLIENT_ID = '543350514030-1c79sfdt400tbu00hlsifnml2elnkr3v.apps.googleusercontent.com'
const CLIENT_SECRET = 'r153VvwHuevFM8bC6FmmmxZV'
const REDIRECT_URI = 'https://developers.google.com/oauthplayground'
const REFRESH_TOKEN = '1//04VnwRsO80d03CgYIARAAGAQSNwF-L9IrK3G7477WiJ-Cg27Czvoh1n4HWlw5SKGuTjH1XoocQ5qPYo1I_sEezQFfYRd1Srwjy_4'


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