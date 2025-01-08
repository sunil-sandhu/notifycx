// // src/test.ts
import Refire from "./index";

const refire = new Refire("<api_key>");

// Test 1: Basic email
refire.sendTestEmail({
  to: "example@example.com",
  subject: "Hello",
  name: "John Doe",
  message: "Testing send email.",
});

// // Test 2: Email using template
refire.sendTestEmailFromTemplate({
  to: "jane@example.com",
  templateId: "<template_id>",
});

// // Test 3: Chained basic email
new Refire("<api_key>").sendTestEmail({
  to: "example@example.com",
  subject: "Hello",
  name: "John Doe",
  message: "Testing send email.",
});

// // Test 4: Chained template email
new Refire("<api_key>").sendTestEmailFromTemplate({
  to: "jane@example.com",
  templateId: "<template_id>",
});
