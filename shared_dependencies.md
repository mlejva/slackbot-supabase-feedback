Shared dependencies:

1. Package dependencies:
   - "typescript"
   - "@supabase/supabase-js"
   - "@slack/web-api"

2. Exported variables:
   - "supabaseClient" (from src/supabase.ts)
   - "sendSlackMessage" (from src/slack.ts)

3. Data schemas:
   - "Feedback" (from src/types.ts)

4. Function names:
   - "handleFeedbackUpdate" (from src/index.ts)

5. Message format:
   - "User '${email}' left the following feedback '${text}'"