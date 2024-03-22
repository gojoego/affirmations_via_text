import * as twilio from 'twilio';
import { MessageInstance } from 'twilio/lib/rest/api/v2010/account/message';
import * as dotenv from 'dotenv';

// load environment variables 
dotenv.config();

// define types for accountSid, authToken and client 
type AccountSid = string;
type AuthToken = string;
type TwilioClient = twilio.Twilio;

// read environment variables from Twilio creds 
const accountSid: AccountSid = process.env.TWILIO_ACCOUNT_SID as AccountSid;
const authToken: AuthToken = process.env.TWILIO_AUTH_TOKEN as AuthToken;

// initialize Twilio client 
const client: TwilioClient = twilio(accountSid, authToken);

// array of affirmations 
const affirmations: string[] = [
    'You are worthy.',
    'You are loved.',
    'You are capable of achieving great things.',
    'You are strong.',
    'You are resilient.',
    'You are beautiful just the way you are.',
    'You are enough.',
    'You are smart.', 
    'You are kind and deserving of kindness.', 
    'You deserve love.', 
    'You are brilliant.'
  ];
  
  // function to get random affirmation 
  function getRandomAffirmation(): string {
    const index: number = Math.floor(Math.random() * affirmations.length);
    return affirmations[index];
  }
  
  // send message with random affirmation 
  client.messages
    .create({
      body: getRandomAffirmation(),
      from: process.env.TWILIO_PHONE_NUMBER!,
      to: process.env.PERSONAL_PHONE_NUMBER!,
    })
    .then((message: MessageInstance) => console.log(`Message sent: ${message.sid}`))
    .catch((error: Error) => console.error(error));