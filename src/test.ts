// // src/test.ts
import { Notify } from "./index";

import * as dotenv from "dotenv";

dotenv.config();

if (!process.env.NOTIFY_API_KEY) {
    throw new Error('NOTIFY_API_KEY is not defined in environment variables');
}
if (!process.env.EXAMPLE_TEMPLATE_ID) {
    throw new Error('EXAMPLE_TEMPLATE_ID is not defined in environment variables');
}
const notify = new Notify(process.env.NOTIFY_API_KEY);


// Test 1: Basic email

notify.sendTestEmail({
  to: "example@example.com",
  subject: "Hello",
  name: "John Doe",
  message: "Testing send email.",
});

// // Test 2: Email using template
notify.sendTestEmailFromTemplate({
  to: "jane@example.com",
  from: "Notify <noreply@notify.cx>",
  templateId: process.env.EXAMPLE_TEMPLATE_ID,
  variables: {
    name: "Jane Doe",
    company: "Example Inc.",
  },

});

// // Test 3: Chained basic email
new Notify(process.env.NOTIFY_API_KEY).sendTestEmail({
  to: "example@example.com",
  subject: "Hello",
  name: "John Doe",
  message: "Testing send email.",
});


// // Test 4: Chained template email
new Notify(process.env.NOTIFY_API_KEY).sendTestEmailFromTemplate({
  to: "jane@example.com",
  from: "Notify <noreply@notify.cx>",
  templateId: process.env.EXAMPLE_TEMPLATE_ID,
  variables: {
    name: "Jane Doe",
    company: "Example Inc.",
  },
});
