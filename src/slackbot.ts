import { WebClient } from '@slack/web-api';

const SLACK_BOT_TOKEN = process.env.SLACK_BOT_TOKEN;

if (!SLACK_BOT_TOKEN) {
  throw new Error('SLACK_BOT_TOKEN is not set in environment variables');
}

const slackClient = new WebClient(SLACK_BOT_TOKEN);

export async function sendMessageToUserChannel(text: string, email: string): Promise<void> {
  const message = `User '${email}' left the following feedback '${text}'`;

  try {
    await slackClient.chat.postMessage({
      channel: 'user',
      text: message,
    });
  } catch (error) {
    console.error('Error sending message to Slack:', error);
  }
}