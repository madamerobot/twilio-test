require('dotenv').load();

// Express Config
const express = require('express');
const app = express();

// Twilio Config
const twilio = require('twilio');
const accountSid = process.env.TWILIO_ACCOUNT_ID; // Your Account SID from www.twilio.com/console
const authToken = process.env.TWILIO_AUTH_TOKEN; // Your Auth Token from www.twilio.com/console
const client = new twilio(accountSid, authToken);

app.use(express.static('dist'));

function sendSMS(number) {
  client.messages.create({
    body: 'Hello from Node',
    to: number, // Text this number
    from: '+3197014201008' // From a valid Twilio number
  })
    .then(message => console.log(message.sid));
}

app.get('/api/sms/:number', (req, res) => {
  const number = req.params.number
  let success = false
  console.log(number.length)
  console.log(number[0])

  if (number.length > 11 && number[0] === '+') {
    sendSMS(number);
    success = true
  }
  if (success) {
    res.send('Message sent successfully');
  } else {
    res.send('Whoops, something went wrong.');
  }
});

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));