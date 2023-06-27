import { Request, Response } from 'express';
import { sendSlackMessage } from './slack';
import { Feedback } from './types';

export async function handleFeedbackUpdate(req: Request, res: Response): Promise<void> {
  try {
    const feedback: Feedback = req.body.event.data.new;

    const message = `User '${feedback.email}' left the following feedback '${feedback.text}'`;

    await sendSlackMessage(message);

    res.status(200).send('Feedback sent to Slack');
  } catch (error) {
    console.error('Error handling feedback update:', error);
    res.status(500).send('Error handling feedback update');
  }
}