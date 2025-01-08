# Refire Email Client

A lightweight TypeScript client for sending transactional emails through the Refire Email API.

## Getting Your API Key

Before using the client, you'll need an API key:

1. Create a company account in the [Refire](https://refire.email) dashboard
2. Navigate to your company view page
3. Find your API key in a secure, masked input field
4. Click the field to copy your API key to clipboard

Keep your API key secure and never share it publicly or commit it to version control.

## Installation

```bash
npm install refire-client
```

## Usage

Initialize the Client

```typescript
import { Refire } from "refire-client";

const refire = new Refire({
  apiKey: "your-api-key",
});
```

You can optionally specify a custom API URL during initialization:

```typescript
const refire = new Refire({
  apiKey: "your-api-key",
  apiUrl: "https://api.refire.email/v1",
});
```

## Sending Basic Emails

To send a basic email without a template:

```typescript
refire.sendEmail({
  to: "recipient@example.com",
  subject: "Hello",
  name: "John Doe",
  message: "Your email content here",
});
```

### Sending Template-Based Emails

To send an email using a pre-defined template:

```typescript
refire.sendEmailFromTemplate({
  to: "recipient@example.com",
  templateId: "<your_template_id>",
});
```

### Method Chaining

You can also use method chaining if preferred:

Sending a basic email:

```typescript
new Refire("<your_api_key>").sendEmail({
  to: "recipient@example.com",
  subject: "Hello",
  name: "John Doe",
  message: "Your email content here",
});
```

Sending a template-based email:

```typescript
new Refire("<your_api_key>").sendEmailFromTemplate({
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
  await refire.sendEmail({
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

[Refire](https://refire.email)

For more information and detailed documentation, visit [refire.email](https://refire.email).
