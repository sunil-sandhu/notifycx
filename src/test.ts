// // src/test.ts
import Notify from "./index";

const notify = new Notify("<api_key>");

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
  templateId: "<template_id>",
  variables: {
    name: "Jane Doe",
    company: "Example Inc.",
  },
});

// // Test 3: Chained basic email
new Notify("<api_key>").sendTestEmail({
  to: "example@example.com",
  subject: "Hello",
  name: "John Doe",
  message: "Testing send email.",
});

// // Test 4: Chained template email
new Notify("<api_key>").sendTestEmailFromTemplate({
  to: "jane@example.com",
  from: "Notify <noreply@notify.cx>",
  templateId: "<template_id>",
  variables: {
    name: "Jane Doe",
    company: "Example Inc.",
  },
});
