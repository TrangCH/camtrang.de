import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-work',
  templateUrl: './my-work.component.html',
  styleUrls: ['./my-work.component.scss']
})
export class MyWorkComponent {

  constructor() { }

  myWorkTopic = [
    {
      title: 'All',
    },
    {
      title: 'Angular',
    },
    {
      title: 'Java Script',
    },
  ];

  myWorks = [
    {
      img: 'assets/img/Mühlbach2.jpg',
      title: 'Quiz-App',
      shortInformation: 'JavaScript - Quiz.',
      link: '',
    },
    {
      img: 'assets/img/Mühlbach9.jpg',
      title: 'Join-Kanban-Board',
      shortInformation: 'JavaScript - based project management',
      link: '',
    },
    {
      img: 'assets/img/Mühlbach10.jpg',
      title: 'EL POLLO LOCO',
      shortInformation: 'JavaScript - based jump and run game.',
      link: '',
    },
    {
      img: 'assets/img/Mühlbach16.jpg',
      title: 'Projekt4',
      shortInformation: '4.',
      link: '',
    },
    {
      img: 'assets/img/Mühlbach16.jpg',
      title: 'Projekt5',
      shortInformation: '5.',
      link: '',
    },
    {
      img: 'assets/img/Mühlbach16.jpg',
      title: 'Projekt6',
      shortInformation: '6.',
      link: '',
    },
  ];

 
}
