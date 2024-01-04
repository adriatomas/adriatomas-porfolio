import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { SendEmailService } from '../services/send-email.service';

@Component({
  selector: 'app-contact',
  template: `
    <section id="contact">
      <div class="row section-intro">
        <div class="col-twelve">
          <h5>Contact</h5>
          <h1>I'd Love To Hear From You.</h1>
        </div>
      </div>

      <div class="row contact-form">
        <div class="col-twelve">
          <form
            name="contactForm"
            id="contactForm"
            [formGroup]="contactForm"
            (ngSubmit)="submitForm($event)"
          >
            <fieldset>
              <div class="form-field">
                <input
                  name="contactName"
                  formControlName="name"
                  type="text"
                  id="contactName"
                  placeholder="Name"
                  value=""
                  minlength="2"
                  required=""
                />
              </div>
              <div class="form-field">
                <input
                  formControlName="email"
                  name="contactEmail"
                  type="email"
                  id="contactEmail"
                  placeholder="Email"
                  value=""
                  required=""
                />
              </div>
              <div class="form-field">
                <input
                  formControlName="subject"
                  name="contactSubject"
                  type="text"
                  id="contactSubject"
                  placeholder="Subject"
                  value=""
                />
              </div>
              <div class="form-field">
                <textarea
                  formControlName="message"
                  name="contactMessage"
                  id="contactMessage"
                  placeholder="message"
                  rows="10"
                  cols="50"
                  required=""
                ></textarea>
              </div>
              <div class="form-field">
                <button class="submitform" type="submit">Submit</button>
                <div id="submit-loader">
                  <div class="text-loader">Sending...</div>
                  <div class="s-loader">
                    <div class="bounce1"></div>
                    <div class="bounce2"></div>
                    <div class="bounce3"></div>
                  </div>
                </div>
              </div>
            </fieldset>
          </form>

          <div id="message-warning" *ngIf="formErrors.length">
            @for (error of formErrors; track error) {
            <p>{{ error }}</p>
            }
          </div>

          <div id="message-success" *ngIf="success">
            <i class="fa fa-check"></i>Your message was sent, thank you!<br />
          </div>
        </div>
      </div>

      <div class="row contact-info">
        <div class="col-four tab-full">
          <div class="icon">
            <i class="icon-pin"></i>
          </div>

          <h5>Where to find me</h5>

          <p [innerHTML]="location"></p>
        </div>

        <div class="col-four tab-full">
          <div class="icon">
            <i class="icon-mail"></i>
          </div>

          <h5>Email Me At</h5>

          <p>{{ email }}</p>
        </div>

        <div class="col-four tab-full">
          <div class="icon">
            <i class="icon-phone"></i>
          </div>

          <h5>Call Me At</h5>

          <p>Phone: {{ phone }}</p>
        </div>
      </div>
    </section>
  `,
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
})
export class ContactComponent {
  public email = 'adriatomas@hotmail.com';
  public phone = '(+034) 600 71 37 48';
  public location = 'Spain, </br> 08924 Barcelona';

  public contactForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    email: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.email,
    ]),
    subject: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
    ]),
    message: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
    ]),
  });

  public success = false;

  public formErrors: string[] = [];

  private formErrorsMessages = {
    required: 'This field is required',
    minlength: 'This field must be at least 2 characters long',
    email: 'This field must be a valid email',
    error: 'Something went wrong, please try again later',
  };
  private formControlNames = {
    name: 'Name',
    email: 'Email',
    subject: 'Subject',
    message: 'Message',
  };

  private sendEmailService = inject(SendEmailService);

  public submitForm(event: Event) {
    this.validateForm();

    if (this.formErrors.length === 0) {
      this.sendEmailService
        .sendEmail(event.target as HTMLFormElement)
        .then(() => {
          this.success = true;
        })
        .catch(() => {
          this.formErrors.push(this.formErrorsMessages.error);
        });
    }
  }

  private validateForm() {
    this.formErrors = Object.entries(this.contactForm.controls)
      .filter(([_, value]) => value.invalid)
      .map(([key, value]) => {
        const formControlErrors = value.errors as ValidationErrors;

        return `${this.formControlNames[key]}: ${
          this.formErrorsMessages[Object.keys(formControlErrors)[0]]
        }`;
      });
  }
}
