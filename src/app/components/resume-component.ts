import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-resume',
  template: `
    <section id="resume" class="grey-section" #resume>
      <div class="row section-intro">
        <div class="col-twelve">
          <h5>Resume</h5>
          <h1>More of my credentials.</h1>

          <p class="lead">
            All the experience and qualifications that I have acquired during my
            professional career.
          </p>
        </div>
      </div>

      <div class="row resume-timeline">
        <div class="col-twelve resume-header">
          <h2>Work Experience</h2>
        </div>

        <div class="col-twelve">
          <div class="timeline-wrap">
            @for (workExperience of workExperienceList; track
            workExperience.title) {
            <div class="timeline-block">
              <div class="timeline-ico">
                <i class="fa fa-briefcase"></i>
              </div>

              <div class="timeline-header">
                <h3>{{ workExperience.title }}</h3>
                <p>{{ workExperience.date }}</p>
              </div>

              <div class="timeline-content">
                <h4>{{ workExperience.company }}</h4>
                <div [innerHTML]="workExperience.description"></div>
              </div>
            </div>
            }
          </div>
        </div>
      </div>

      <div class="row resume-timeline">
        <div class="col-twelve resume-header">
          <h2>Education</h2>
        </div>

        <div class="col-twelve">
          <div class="timeline-wrap">
            @for (education of educationList; track education.title) {
            <div class="timeline-block">
              <div class="timeline-ico">
                <i class="fa fa-graduation-cap"></i>
              </div>

              <div class="timeline-header">
                <h3>{{ education.title }}</h3>
                <p>{{ education.date }}</p>
              </div>

              <div class="timeline-content">
                <h4>{{ education.school }}</h4>
                <div [innerHTML]="education.description"></div>
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
export class ResumeComponent implements AfterViewInit {
  public workExperienceList = [
    {
      title: 'Frontend engineer',
      date: 'June 2022 - Present',
      company: 'Wallapop',
      description: `<p class="mb-2"> - Create and implement new website sections, pages, and functionalities for the primary company website using Angular, NextJS, and Twig,
        while also enhancing the back once system with Angular. </p>
        <p class="mb-2"> - Conducted A/B testing initiatives to optimize user experience and performance. </p>
        <p class="mb-2"> - Ensured ongoing maintenance and improvement of existing features in production, including adapting them for new country expansions.</p>`,
    },
    {
      title: 'Frontend engineer',
      date: 'February 2022 - June 2022',
      company: 'In-Tact',
      description:
        '<p class="mb-2">Create and develop multiple projects for our clients, with Angular, Jest and Jasmine.</p>',
    },
    {
      title: 'Frontend engineer',
      date: 'July 2021 - February 2022',
      company: 'Onebox',
      description:
        '<p class="mb-2">Develop new functionalities to the company platform using angular js, and angular 8.</p>',
    },
    {
      title: 'Frontend engineer',
      date: 'July 2020 - July 2021',
      company: 'Crealogix',
      description:
        '<p class="mb-2">responsible for the development of a mobile banking app for the United Arab Emirates. My tasks include coding, reviewing merge requests, and performing releases using Jenkins. Additionally, I am involved in managing client-reported issues in Redmine at certain times.</p>',
    },
    {
      title: 'Frontend engineer',
      date: 'March 2019 - July 2020',
      company: 'Slashmobility',
      description:
        '<p class="mb-2">Development of web applications and hybrid apps, using the latest versions of Angular for (web) and Ionic for (apps).</p>',
    },
    {
      title: 'Fullstack engineer',
      date: 'March 2017 - March 2019',
      company: 'Setting consultoría',
      description:
        '<p class="mb-2">I was in multiple projects, the most notable is the development of an application for the Oncology Institute of Catalonia. I was in charge of developing the application used by the doctors who are in the breast cancer early detection team. The stack used was JAVA for the backend and JSP for the frontend.</p>',
    },
    {
      title: 'Intern Frontend engineer',
      date: 'September 2016 - March 2017',
      company: 'Kuvut',
      description:
        '<p class="mb-2">My internship was aimed at rebranding the company\'s corporate website. It was developed with CSS, HTML and vanilla JavaScript.</p>',
    },
  ];

  public educationList = [
    {
      title: 'Specialization course of Big data and Artificial Intelligence',
      date: 'September 2023 - June 2024',
      school: 'Institut mediaTIC',
      description:
        '<p class="mb-2">Course that we can do after get the degree of <strong class="text-black" >Advanced specific vocational training of Web applications development</strong>, is related to learn all the basic about Machine learning, and big data basics. This course is an official qualification from Spain </p>',
    },
    {
      title:
        'Advanced specific vocational training of Web applications development',
      date: 'September 2015 - June 2017',
      school: "Inistitut Joan d'Austría",
      description:
        '<p class="mb-2">qualification where you learn all the basics to be able to create web applications. This course is an official qualification from Spain.</p>',
    },
  ];

  @ViewChild('resume', {static: true}) resume: ElementRef;

  ngAfterViewInit() {

  }
}
