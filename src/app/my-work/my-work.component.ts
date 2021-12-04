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

  myWorkImges = [
    {
      img: 'assets/img/Mühlbach2.jpg',
    },
    {
      img: 'assets/img/Mühlbach9.jpg',
    },
    {
      img: 'assets/img/Mühlbach10.jpg',
    },
    {
      img: 'assets/img/Mühlbach16.jpg',
    },
  ];

  tryOuts = [
    {
      title: 'Projekt1',
      shortInformation: 'JavaScript - based jump and run game.',
    },
    {
      title: 'Projekt2',
      shortInformation: '2.',
    },
    {
      title: 'Projekt3',
      shortInformation: '3.',
    },
    {
      title: 'Projekt4',
      shortInformation: '4.',
    },
  ];

}
