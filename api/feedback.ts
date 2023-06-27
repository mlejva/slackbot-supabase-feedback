import { VercelRequest, VercelResponse } from '@vercel/node';
import { supabaseClient } from '../src/supabase';
import { sendMessageToUserChannel } from '../src/slackbot';

export default async (req: VercelRequest, res: VercelResponse) => {
  if (req.method !== 'POST') {
    res.status(405).send('Method Not Allowed');
    return;
  }

  const { text, email } = req.body;

  if (!text || !email) {
    res.status(400).send('Bad Request: Missing required fields');
    return;
  }

  const { data, error } = await supabaseClient.from('feedback').insert([{ text, email }]);

  if (error) {
    res.status(500).send('Error inserting feedback into Supabase');
    return;
  }

  const message = `User '${email}' left the following feedback '${text}'`;
  await sendMessageToUserChannel(message);

  res.status(200).send('Feedback added and message sent to Slack');
};