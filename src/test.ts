// // src/test.ts
import { Notify } from "./index";

const notify = new Notify("<api-key>");

// Test 1: Basic email
async function testEmail() {
  const testEmail = await notify.sendTestEmail({
    to: "example@example.com",
    subject: "Hello",
    name: "John Doe",
    message: "Testing send email.",
  });

  console.log("testEmail", testEmail);
}
testEmail();

// // Test 2: Email using template
async function testEmailFromTemplate() {
  const testEmailFromTemplate = await notify.sendTestEmailFromTemplate({
    to: "jane@example.com",
    from: "Notify <noreply@notify.cx>",
    templateId: "<template-id>",
    variables: {
      name: "Jane Doe",
      company: "Example Inc.",
    },
  });

  console.log("testEmailFromTemplate", testEmailFromTemplate);
}
testEmailFromTemplate();

// // Test 3: Chained basic email
async function testChainedEmail() {
  const testChainedEmail = await new Notify("<api-key>").sendTestEmail({
    to: "example@example.com",
    subject: "Hello",
    name: "John Doe",
    message: "Testing send email.",
  });

  console.log("testChainedEmail", testChainedEmail);
}
testChainedEmail();

// // Test 4: Chained template email
async function testChainedTemplateEmail() {
  const testChainedTemplateEmail = await new Notify(
    "<api-key>"
  ).sendTestEmailFromTemplate({
    to: "jane@example.com",
    from: "Notify <noreply@notify.cx>",
    templateId: "<template-id>",
    variables: {
      name: "Jane Doe",
      company: "Example Inc.",
    },
  });

  console.log("testChainedTemplateEmail", testChainedTemplateEmail);
}
testChainedTemplateEmail();
