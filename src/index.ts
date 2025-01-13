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

class NotifyCX {
  public readonly apiKey: string;
  public readonly apiUrl: string;

  constructor(apiKey: string, apiUrl = "https://notify.cx/api") {
    if (!apiKey) {
      throw new Error("API key is required");
    }
    this.apiKey = apiKey;
    this.apiUrl = apiUrl;
  }

  async sendEmail(params: SendEmailParams): Promise<void> {
    const headers = {
      "Content-Type": "application/json",
      "x-api-key": this.apiKey,
    };

    const response = await fetch(`${this.apiUrl}/send-email`, {
      method: "POST",
      headers,
      body: JSON.stringify(params),
    });

    if (!response.ok) {
      throw new Error(`Failed to send email: ${response.statusText}`);
    }
    console.log("Email sent successfully:", await response.json());
  }

  async sendTestEmail(params: SendEmailParams): Promise<void> {
    const headers = {
      "Content-Type": "application/json",
      "x-api-key": this.apiKey,
    };

    const response = await fetch(`${this.apiUrl}/test/send-email`, {
      method: "POST",
      headers,
      body: JSON.stringify(params),
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

  async sendTestEmailFromTemplate(
    params: SendEmailFromTemplateParams
  ): Promise<void> {
    const response = await fetch(
      `${this.apiUrl}/test/send-email-from-template`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": this.apiKey,
        },
        body: JSON.stringify({
          templateId: params.templateId,
          to: params.to,
        }),
      }
    );

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

export default NotifyCX;
