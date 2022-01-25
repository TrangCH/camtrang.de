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

  visitProject(url: string) {
    window.open(url, "_blank");
  }

  allProjects = [ 
    {
      img: 'assets/img/Mühlbach2.jpg',
      title: 'Quiz-App',
      shortInformation: 'JavaScript - Quiz.',
      url: './assets/portfolio/quiz_app/index.html',
      category: 'JavaScript',
    },
    {
      img: 'assets/img/Mühlbach9.jpg',
      title: 'Join-Kanban-Board',
      shortInformation: 'JavaScript and group project - based project management',
      url: 'http://gruppe-95.developerakademie.com/',
      category: 'JavaScript',
    },
    {
      img: 'assets/img/Mühlbach10.jpg',
      title: 'EL POLLO LOCO',
      shortInformation: 'JavaScript - based jump and run game.',
      url: 'https://www.cam-huy-trang.developerakademie.com/assets/portfolio/el_pollo_loco/index.html',
      category: 'JavaScript',
    },
    {
      img: 'assets/img/Mühlbach16.jpg',
      title: 'Ring of fire',
      shortInformation: 'A drinking card game',
      url: 'https://www.cam-huy-trang.developerakademie.com/assets/portfolio/ringoffire/index.html',
      category: 'Angular',
    },
    {
      img: 'assets/img/Mühlbach16.jpg',
      title: 'Simple-CRM',
      shortInformation: 'It is a simple Customer-Relationship-Management-System',
      url: 'https://www.cam-huy-trang.developerakademie.com/assets/portfolio/simple-crm/index.html',
      category: 'Angular',
    },
    {
      img: 'assets/img/Mühlbach16.jpg',
      title: 'Pokédex',
      shortInformation: "A tabular overview (type, strengths and abilities) of the Pokémon`s",
      url: 'https://www.cam-huy-trang.developerakademie.com/assets/portfolio/pokédex/index.html',
      category: 'API',
    },
  ];


}
