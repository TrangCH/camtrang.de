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

}
