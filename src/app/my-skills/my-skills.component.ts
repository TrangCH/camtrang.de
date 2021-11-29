import { Component } from '@angular/core';

@Component({
  selector: 'app-my-skills',
  templateUrl: './my-skills.component.html',
  styleUrls: ['./my-skills.component.scss']
})
export class MySkillsComponent {

  mySkills = [
    {
      img: 'assets/img/Developer Akademie-Portfolio/java script.png', // 
      title: 'Java Script',
    },
    {
      img: 'assets/img/Developer Akademie-Portfolio/angular.png',
      title: 'Angular',
    },
    {
      img: 'assets/img/Developer Akademie-Portfolio/Group 205.png',
      title: 'HTML / CSS',
    },
    {
      img: 'assets/img/Developer Akademie-Portfolio/Group 226.png',
      title: 'SCRUM',
    },
    {
      img: 'assets/img/Developer Akademie-Portfolio/github-fill.png',
      title: 'Git',
    },
    {
      img: 'assets/img/Developer Akademie-Portfolio/Group 20.png',
      title: 'Design Thinking',
    },
    {
      img: 'assets/img/Developer Akademie-Portfolio/icons8-rest-api-80 2.png',
      title: 'Rest API',
    },
    {
      img: 'assets/img/Developer Akademie-Portfolio/icons8-test-lab-96 2.png',
      title: 'Test automation',
    },
    {
      img: 'assets/img/Developer Akademie-Portfolio/icons8-database-52 2.png',
      title: 'Databases',
    },
  ];
}



