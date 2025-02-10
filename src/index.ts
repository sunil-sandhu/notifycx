// src/index.ts

interface SendEmailParams {
  subject: string;
  to: string;
  name: string;
  message: string;
}

interface SendEmailFromTemplateParams {
  templateId: string;
  from?: string;
  to: string;
  variables?: Record<string, string>;
}

class Notify {
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
        from: params?.from,
        to: params.to,
        variables: params?.variables,
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
          from: params?.from,
          to: params.to,
          variables: params?.variables,
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

// export default Notify;
export { Notify }
