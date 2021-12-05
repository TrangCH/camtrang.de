import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-work',
  templateUrl: './my-work.component.html',
  styleUrls: ['./my-work.component.scss']
})
export class MyWorkComponent {

  constructor() { }

  myWork = [
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
      title: 'Projekt1',
      shortInformation: 'JavaScript - based jump and run game.',
    },
    {
      img: 'assets/img/Mühlbach9.jpg',
      title: 'Projekt2',
      shortInformation: '2.',
    },
    {
      img: 'assets/img/Mühlbach10.jpg',
      title: 'Projekt3',
      shortInformation: '3.',
    },
    {
      img: 'assets/img/Mühlbach16.jpg',
      title: 'Projekt4',
      shortInformation: '4.',
    },
  ];

 
}
