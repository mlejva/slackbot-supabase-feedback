import { supabaseClient } from './supabase';
import { sendMessageToUserChannel } from './slackbot';

const main = async () => {
  const { data: initialFeedback, error } = await supabaseClient
    .from('feedback')
    .select('text, email');

  if (error) {
    console.error('Error fetching initial feedback:', error);
    return;
  }

  supabaseClient
    .from('feedback')
    .on('INSERT', async (payload) => {
      const { new: newFeedback } = payload;
      const { text, email } = newFeedback;
      await sendMessageToUserChannel(`User '${email}' left the following feedback '${text}'`);
    })
    .subscribe();
};

main();