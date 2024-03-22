import { error } from 'console';
import * as dotenv from 'dotenv'; // for loading environment variables 
import twilio, { Twilio } from 'twilio';
import { MessageInstance } from 'twilio/lib/rest/api/v2010/account/message';

dotenv.config() // load environment variables 

// define types for account SID and auth token 
type AccountSid = string;
type AuthToken = string;

// read environment variables for Twilio creds 
const accountSid: AccountSid = process.env.TWILIO_ACCOUNT_SID as AccountSid;
const authToken: AuthToken = process.env.TWILIO_AUTH_TOKEN as AuthToken;

const client: Twilio = twilio(accountSid, authToken); // initialize Twilio client

// fetch messages with limit of 20
client.messages.list({limit: 20})
               .then((messages: MessageInstance[]) => messages.forEach((m: MessageInstance) => console.log(m.sid)))
               .catch((error: Error) => console.error(error));