import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-work',
  templateUrl: './my-work.component.html',
  styleUrls: ['./my-work.component.scss']
})
export class MyWorkComponent implements OnInit {
  id: any;
  fadeInAnimation = false;
  breakpoint!: number;
  event: any;

  constructor() { }

  ngOnInit(): void {
    this.filtered = this.allProjects;
    this.breakpoint = (window.innerWidth <= 900) ? 1 : 2;
  }

  onResize(event: any) {
    this.breakpoint = (event.target.innerWidth <= 900) ? 1 : 2;
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
  currentFilter = '';


  displayedImg: any = document.getElementById('work-img-properties');

  deleteAllDisplayedImg() {
    this.displayedImg.src = '';
  }

  showAll() {
    setTimeout(() => {
      this.filtered = this.allProjects; // Hier stand vorher allProjects
      this.currentFilter = '';
    }, 500);

  }

  showCategory(category: any) {
    setTimeout(() => {
      this.filtered = this.allProjects.filter(project => project.category === category);
      this.currentFilter = category;
    }, 500);

  }

  visitProject(url: string) {
    window.open(url, "_blank");
  }


  allProjects = [
    {
      img: 'assets/img/portfolio/pokédex5.png', // Photos 780px Quadrat
      title: 'Pokédex',
      shortInformation: "A tabular overview (type, strengths and abilities) of the Pokémon`s",
      url: './assets/portfolio/pokédex/index.html',
      category: 'APIs',
    },
    {
      img: 'assets/img/portfolio/kanban_board4.png',
      title: 'Join-Kanban-Board',
      shortInformation: 'JavaScript and group project - based project management',
      url: 'http://gruppe-95.developerakademie.com/',
      category: 'JavaScript',
    },
    {
      img: 'assets/img/portfolio/el_pollo_loco3.png',
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

  ];


}
