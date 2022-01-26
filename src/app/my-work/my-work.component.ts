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
      img: 'assets/img/portfolio/quiz_app_start_screen.png',
      title: 'Quiz-App',
      shortInformation: 'JavaScript - Quiz.',
      url: './assets/portfolio/quiz_app/index.html',
      category: 'JavaScript',
    },
    {
      img: 'assets/img/portfolio/kanban_board3.png',
      title: 'Join-Kanban-Board',
      shortInformation: 'JavaScript and group project - based project management',
      url: 'http://gruppe-95.developerakademie.com/',
      category: 'JavaScript',
    },
    {
      img: 'assets/img/portfolio/el_pollo_loco.png',
      title: 'EL POLLO LOCO',
      shortInformation: 'JavaScript - based jump and run game.',
      url: './assets/portfolio/el_pollo_loco/index.html',
      category: 'JavaScript',
    },
    {
      img: 'assets/img/portfolio/ring_of_fire.png',
      title: 'Ring of fire',
      shortInformation: 'A drinking card game',
      url: './assets/portfolio/ringoffire/index.html',
      category: 'Angular',
    },
    //{
    //  img: 'assets/img/portfolio/simple_crm.png',
    //  title: 'Simple-CRM',
    //  shortInformation: 'It is a simple Customer-Relationship-Management-System',
    //  url: 'https://www.cam-huy-trang.developerakademie.com/assets/portfolio/simple-crm/index.html',
    //  category: 'Angular',
    //},
    {
      img: 'assets/img/portfolio/pokédex.png',
      title: 'Pokédex',
      shortInformation: "A tabular overview (type, strengths and abilities) of the Pokémon`s",
      url: './assets/portfolio/pokédex/index.html',
      category: 'API',
    },
  ];


}
