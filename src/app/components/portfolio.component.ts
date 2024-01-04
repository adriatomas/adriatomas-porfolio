import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  template: `
    <section id="portfolio">
      <div class="row section-intro">
        <div class="col-twelve">
          <h5>Portfolio</h5>
          <h1>Check Out Some of My Works.</h1>

          <p class="lead">
            Here are some of my relevant contributions to professional projects.
          </p>
        </div>
      </div>

      <div class="row portfolio-content">
        <div class="col-twelve">
          <div
            id="folio-wrapper"
            class="flex flex-wrap justify-center gap-y-8 sm:mx-3"
          >
            @for (porfolioItem of porfilioList; track porfolioItem.title) {
            <div class="folio-item min-w-auto max-w-[500px]">
              <div class="item-wrap">
                <img
                  [src]="porfolioItem.image"
                  alt="Wallapop"
                />
                <a href="" class="overlay">
                  <div class="folio-item-table">
                    <div class="folio-item-cell">
                      <h3 class="folio-title">{{porfolioItem.title}}</h3>
                      <span class="folio-types">
                        {{porfolioItem.description}}
                      </span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            }
          </div>
        </div>
      </div>
    </section>
  `,
  standalone: true,
})
export class PortfolioComponent {
  porfilioList = [
    {
      title: 'Wallapop',
      description: 'Api integration & Front End development',
      image: 'assets/images/portfolio/wallapop.webp',
    },
    {
      title: 'Hola Talent',
      description: 'Api integration & Front End development',
      image: 'assets/images/portfolio/hola-talent.webp',
    },
    {
      title: 'WindowSight',
      description: 'Api integration & Front End development',
      image: 'assets/images/portfolio/windowsight.webp',
    },
  ];
}
