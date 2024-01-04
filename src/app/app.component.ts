import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'adria-portfolio';
  public author = 'Adrià Tomás';
  public infoList = [
    {title: 'Fullname:', value: this.author},
    {title: 'Birth: Date', value: 'October 24, 1994'},
    {title: 'Job:', value: 'Frontend Developer'},
    {title: 'Website:', value: 'www.adriatomas.com'},
    {title: 'Email:', value: 'adriatomas@hotmail.com'},
  ]

  public skillsList = [
    {title: 'HTML', value: 90},
    {title: 'CSS', value: 90},
    {title: 'Javascript', value: 90},
    {title: 'Angular', value: 90},
    {title: 'React', value: 70},
    {title: 'Jest', value: 70},
  ]

}
