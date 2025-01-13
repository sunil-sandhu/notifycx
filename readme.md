# NotifyCX Email Client

A lightweight TypeScript client for sending transactional emails through the NotifyCX Email API.

## Getting Your API Key

Before using the client, you'll need an API key:

1. Create a company account in the [NotifyCX](https://notify.cx) dashboard
2. Navigate to your company view page
3. Find your API key in a secure, masked input field
4. Click the field to copy your API key to clipboard

Keep your API key secure and never share it publicly or commit it to version control.

## Installation

```bash
npm install notifycx
```

## Usage

Initialize the Client

```typescript
import { NotifyCX } from "notifycx";

const notifycx = new NotifyCX({
  apiKey: "your-api-key",
});
```

You can optionally specify a custom API URL during initialization:

```typescript
const notifycx = new NotifyCX({
  apiKey: "your-api-key",
  apiUrl: "https://api.notify.cx/v1",
});
```

## Sending Basic Emails

To send a basic email without a template:

```typescript
notifycx.sendEmail({
  to: "recipient@example.com",
  subject: "Hello",
  name: "John Doe",
  message: "Your email content here",
});
```

### Sending Template-Based Emails

To send an email using a pre-defined template:

```typescript
notifycx.sendEmailFromTemplate({
  to: "recipient@example.com",
  templateId: "<your_template_id>",
});
```

### Method Chaining

You can also use method chaining if preferred:

Sending a basic email:

```typescript
new NotifyCX("<your_api_key>").sendEmail({
  to: "recipient@example.com",
  subject: "Hello",
  name: "John Doe",
  message: "Your email content here",
});
```

Sending a template-based email:

```typescript
new NotifyCX("<your_api_key>").sendEmailFromTemplate({
  to: "recipient@example.com",
  templateId: "<your_template_id>",
});
```

## API Reference

### SendEmailParams

Parameters for sending a basic email:

- `to` (string): Recipient email address
- `subject` (string): Email subject line
- `name` (string): Recipient name
- `message` (string): Email content

### SendEmailFromTemplateParams

Parameters for sending a template-based email:

- `to` (string): Recipient email address
- `templateId` (string): ID of the template to use

### SendTestEmailParams

Parameters for sending a basic test email:

- `to` (string): Recipient email address
- `subject` (string): Email subject line
- `name` (string): Recipient name
- `message` (string): Email content

### SendTestEmailFromTemplateParams

Parameters for sending a template-based testemail:

- `to` (string): Recipient email address
- `templateId` (string): ID of the template to use

## Error Handling

The client includes built-in error handling. Both `sendEmail` and `sendEmailFromTemplate` methods will throw an error if the API request fails:

```typescript
try {
  await notifycx.sendEmail({
    to: "recipient@example.com",
    subject: "Hello",
    name: "John Doe",
    message: "Your email content here",
  });
} catch (error) {
  console.error("Failed to send email:", error);
}
```

## License

MIT

## Author

[NotifyCX](https://notify.cx)

For more information and detailed documentation, visit [notify.cx](https://notify.cx).
