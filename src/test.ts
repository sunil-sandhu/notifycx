// // src/test.ts
import Refire from "./index";

const refire = new Refire("<api_key>");

// Test 1: Basic email
refire.sendEmail({
  to: "example@example.com",
  subject: "Hello",
  name: "John Doe",
  message: "Testing send email.",
});

// // Test 2: Email using template
refire.sendEmailFromTemplate({
  to: "jane@example.com",
  templateId: "<template_id>",
});

// // Test 3: Chained basic email
new Refire("<api_key>").sendEmail({
  to: "example@example.com",
  subject: "Hello",
  name: "John Doe",
  message: "Testing send email.",
});

// // Test 4: Chained template email
new Refire("<api_key>").sendEmailFromTemplate({
  to: "jane@example.com",
  templateId: "<template_id>",
});
