import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-intro',
  template: `
    <section id="intro">
      <div class="intro-overlay"></div>

      <div class="intro-content">
        <div class="row">
          <div class="col-twelve">
            <h5>Hello, World.</h5>
            <h1>I'm {{ author }}.</h1>

            <p class="intro-position">
              <span>Hello I am frontend developer in Barcelona.</span>
              <br />
              <span> Welcome to my portfolio !</span>
            </p>

            <a class="button stroke smoothscroll" href="#about" title=""
              >More About Me</a
            >
          </div>
        </div>
      </div>

      <ul class="intro-social">
        <li>
          <a href="https://www.linkedin.com/in/adria-tomas-altes/" target="_blank"><i class="fa fa-linkedin"></i></a>
        </li>
        <li>
          <a href="https://github.com/adriatomas" target="_blank"><i class="fa fa-github"></i></a>
        </li>
      </ul>
    </section>
  `,
  standalone: true,
})
export class IntroComponent {
  @Input() author: string = '';
}
