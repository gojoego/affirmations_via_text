import * as twilio from 'twilio';
import * as dotenv from 'dotenv';
dotenv.config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);

const affirmations = [
    'You are worthy and loved.',
    'You are capable of achieving great things.',
    'You are strong and resilient.',
    'You are beautiful just the way you are.',
    'You are enough.',
  ];
  
  function getRandomAffirmation(): string {
    const index = Math.floor(Math.random() * affirmations.length);
    return affirmations[index];
  }
  
  client.messages
    .create({
      body: getRandomAffirmation(),
      from: process.env.TWILIO_PHONE_NUMBER,
      to: process.env.PERSONAL_PHONE_NUMBER!,
    })
    .then((message) => console.log(`Message sent: ${message.sid}`))
    .catch((error) => console.error(error));