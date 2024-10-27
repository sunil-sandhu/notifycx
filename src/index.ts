// src/index.ts

interface SendEmailParams {
  subject: string;
  to: string;
  name: string;
  message: string;
}

interface SendEmailFromTemplateParams {
  templateId: string;
  data: {
    subject: string;
    name: string;
    message: string;
    to: string;
  };
}

class Refire {
  private apiKey: string;
  private apiUrl: string;

  constructor(apiKey: string, apiUrl = "https://refire.email/api") {
    this.apiKey = apiKey; // Now required
    this.apiUrl = apiUrl;
  }

  async sendEmail(params: SendEmailParams): Promise<void> {
    const response = await fetch(`${this.apiUrl}/send-email`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        apiKey: this.apiKey,
        data: params,
      }),
    });

    if (!response.ok) {
      throw new Error(`Failed to send email: ${response.statusText}`);
    }
    console.log("Email sent successfully:", await response.json());
  }

  async sendEmailFromTemplate(
    params: SendEmailFromTemplateParams
  ): Promise<void> {
    const response = await fetch(`${this.apiUrl}/send-email-from-template`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        apiKey: this.apiKey,
        templateId: params.templateId,
        data: params.data,
      }),
    });

    if (!response.ok) {
      throw new Error(
        `Failed to send email from template: ${response.statusText}`
      );
    }
    console.log(
      "Email from template sent successfully:",
      await response.json()
    );
  }
}

export default Refire;
