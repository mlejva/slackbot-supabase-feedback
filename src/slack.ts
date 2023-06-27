import { WebClient } from "@slack/web-api";
import { Feedback } from "./types";

const SLACK_API_TOKEN = process.env.SLACK_API_TOKEN;
const SLACK_CHANNEL = "general";

const slackClient = new WebClient(SLACK_API_TOKEN);

export async function sendSlackMessage(feedback: Feedback): Promise<void> {
  const message = `User '${feedback.email}' left the following feedback '${feedback.text}'`;

  await slackClient.chat.postMessage({
    channel: SLACK_CHANNEL,
    text: message,
  });
}