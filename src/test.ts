// // src/test.ts
import { Notify } from "./index";

import * as dotenv from "dotenv";

dotenv.config();

if (!process.env.NOTIFY_API_KEY) {
    throw new Error('NOTIFY_API_KEY is not defined in environment variables');
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
  templateId: "557e11e9-b1cc-467e-959e-f9f4157e3e48",
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
  templateId: "557e11e9-b1cc-467e-959e-f9f4157e3e48",
  variables: {
    name: "Jane Doe",
    company: "Example Inc.",
  },
});
