// TODO, ensure every function returns { data, error }

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

export class Notify {
  public readonly apiKey: string;
  public readonly apiUrl: string;

  constructor(apiKey: string, apiUrl = "https://notify.cx/api") {
    if (!apiKey) {
      throw new Error("API key is required");
    }
    this.apiKey = apiKey;
    this.apiUrl = apiUrl;
  }

  async sendEmail(
    params: SendEmailParams
  ): Promise<{ success: boolean; message: string }> {
    try {
      const response = await fetch(`${this.apiUrl}/send-email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": this.apiKey,
        },
        body: JSON.stringify(params),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || response.statusText);
      }

      return data;
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error(`Failed to send email: ${error.message}`);
      }
      throw new Error("Failed to send email: An unknown error occurred");
    }
  }

  async sendTestEmail(
    params: SendEmailParams
  ): Promise<{ success: boolean; message: string }> {
    try {
      const response = await fetch(`${this.apiUrl}/test/send-email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": this.apiKey,
        },
        body: JSON.stringify(params),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || response.statusText);
      }

      return data;
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error(`Failed to send test email: ${error.message}`);
      }
      throw new Error("Failed to send test email: An unknown error occurred");
    }
  }

  async sendEmailFromTemplate(
    params: SendEmailFromTemplateParams
  ): Promise<{ success: boolean; message: string }> {
    try {
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

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || response.statusText);
      }

      return data;
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error(`Failed to send email from template: ${error.message}`);
      }
      throw new Error(
        "Failed to send email from template: An unknown error occurred"
      );
    }
  }

  async sendTestEmailFromTemplate(
    params: SendEmailFromTemplateParams
  ): Promise<{ success: boolean; message: string }> {
    try {
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

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || response.statusText);
      }

      return data;
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error(
          `Failed to send test email from template: ${error.message}`
        );
      }
      throw new Error(
        "Failed to send test email from template: An unknown error occurred"
      );
    }
  }
}

export default Notify;
