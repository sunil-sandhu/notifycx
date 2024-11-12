// src/index.ts

interface SendEmailParams {
  subject: string;
  to: string;
  name: string;
  message: string;
}

interface SendEmailFromTemplateParams {
  templateId: string;
  to: string;
}

class Refire {
  private apiKey: string;
  private apiUrl: string;

  constructor(apiKey: string, apiUrl = "http://refire.email/api") {
    this.apiKey = apiKey; // Now required
    this.apiUrl = apiUrl;
  }

  async sendEmail(params: SendEmailParams): Promise<void> {
    const response = await fetch(`${this.apiUrl}/send-email`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": this.apiKey,
      },
      body: JSON.stringify(params),
    });

    console.log(response.headers);

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
        "x-api-key": this.apiKey,
      },
      body: JSON.stringify({
        templateId: params.templateId,
        to: params.to,
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
