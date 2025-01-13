// // src/test.ts
import NotifyCX from "./index";

const notifycx = new NotifyCX("<api_key>");

// Test 1: Basic email
notifycx.sendTestEmail({
  to: "example@example.com",
  subject: "Hello",
  name: "John Doe",
  message: "Testing send email.",
});

// // Test 2: Email using template
notifycx.sendTestEmailFromTemplate({
  to: "jane@example.com",
  templateId: "<template_id>",
});

// // Test 3: Chained basic email
new NotifyCX("<api_key>").sendTestEmail({
  to: "example@example.com",
  subject: "Hello",
  name: "John Doe",
  message: "Testing send email.",
});

// // Test 4: Chained template email
new NotifyCX("<api_key>").sendTestEmailFromTemplate({
  to: "jane@example.com",
  templateId: "<template_id>",
});
