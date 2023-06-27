Shared Dependencies:

1. Package Dependencies:
   - "typescript"
   - "@slack/web-api"
   - "@supabase/supabase-js"
   - "@vercel/node"

2. Exported Variables:
   - "supabaseClient" (from "src/supabase.ts")
   - "sendMessageToUserChannel" (from "src/slackbot.ts")

3. Data Schemas:
   - "feedback" table schema:
     - "text" column
     - "email" column

4. Function Names:
   - "handleNewFeedback" (in "api/feedback.ts")
   - "initSupabaseClient" (in "src/supabase.ts")
   - "initSlackClient" (in "src/slackbot.ts")

5. Message Template:
   - "User '${email}' left the following feedback '${text}'"