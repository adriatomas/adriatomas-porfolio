import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  template: `
    <section id="services">
      <div class="row section-intro">
        <div class="col-twelve">
          <h5 class="mb-4">Services</h5>
          <h1>What Can I Do For You?</h1>

          <p class="lead">
            Lorem ipsum Do commodo in proident enim in dolor cupidatat
            adipisicing dolore officia nisi aliqua incididunt Ut veniam lorem
            ipsum Consectetur ut in in eu do.
          </p>
        </div>
      </div>

      <div class="row services-content">
        <div class="services-list min-[769px]:flex mt-4 justify-center">
          @for (service of servicesList; track service.title) {
          <article class="service max-w-[40ch] max-[768px]:mx-auto">
            <span class="icon"
              ><i
                [ngClass]="service.icon"
                class="fa fa-code fa-stack-1x fa-inverse"
              ></i
            ></span>

            <div class="service-content">
              <h3>{{service.title}}</h3>

              <p class="desc">
                {{service.description}}
              </p>
            </div>
          </article>
          }
        </div>
      </div>
    </section>
  `,
  standalone: true,
  imports: [CommonModule]
})
export class ServicesComponent {
  public servicesList = [
    {
      icon: 'fa-code',
      title: 'Web Application Development',
      description:
        'Fast, responsive and engaging apps that bring your ideas to life.',
    },
    {
      icon: 'fa-dollar',
      title: 'Payment Gateway Integration',
      description:
        'Integration with the most popular Payment Gateways such as Stripe and Paypal.',
    },
  ];
}
