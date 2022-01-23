import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-work',
  templateUrl: './my-work.component.html',
  styleUrls: ['./my-work.component.scss']
})
export class MyWorkComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
   this.filtered = this.allProjects;
  }

  myWorkTopic = [
    {
      title: 'All',
     
    },
    {
      title: 'Angular',
     
    },
    {
      title: 'JavaScript',
     
    },
  ];

  filtered: any;

  showAll() {
    this.filtered = this.allProjects; // Hier stand vorher allProjects
  }
  showCategory(category: any) {
    this.filtered = this.allProjects.filter(project => project.category === category);
  }


  allProjects = [ // Hier stand vorher allProjects
    {
      img: 'assets/img/Mühlbach2.jpg',
      title: 'Quiz-App',
      shortInformation: 'JavaScript - Quiz.',
      link: '',
      category: 'JavaScript',
    },
    {
      img: 'assets/img/Mühlbach9.jpg',
      title: 'Join-Kanban-Board',
      shortInformation: 'JavaScript - based project management',
      link: '',
      category: 'JavaScript',
    },
    {
      img: 'assets/img/Mühlbach10.jpg',
      title: 'EL POLLO LOCO',
      shortInformation: 'JavaScript - based jump and run game.',
      link: '',
      category: 'JavaScript',
    },
    {
      img: 'assets/img/Mühlbach16.jpg',
      title: 'Projekt4',
      shortInformation: '4.',
      link: '',
      category: 'Angular',
    },
    {
      img: 'assets/img/Mühlbach16.jpg',
      title: 'Projekt5',
      shortInformation: '5.',
      link: '',
      category: 'Angular',
    },
    {
      img: 'assets/img/Mühlbach16.jpg',
      title: 'Pokédex',
      shortInformation: "A tabular overview (type, strengths and abilities) of the Pokémon`s",
      link: '',
      category: 'API',
    },
  ];


}
