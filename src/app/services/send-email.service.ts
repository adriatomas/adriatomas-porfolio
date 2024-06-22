import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';

@Injectable({ providedIn: 'root' })
export class SendEmailService {
  private api_key: string = 'uMBPSyJekzcI8PdWQ';
  private templateId: string = 'template_f5t0yzd';
  private serviceId: string = 'service_06m78tp';

  constructor() {
    emailjs.init(this.api_key);
  }

  sendEmail(form: HTMLFormElement) {
    return emailjs.sendForm(
      this.serviceId,
      this.templateId,
      form,
      this.api_key
    );
  }
}
