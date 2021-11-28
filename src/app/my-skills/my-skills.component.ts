import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-skills',
  templateUrl: './my-skills.component.html',
  styleUrls: ['./my-skills.component.scss']
})
export class MySkillsComponent implements OnInit {

  skillsArea=[
    'Java script',
    'Angular',
    'HTML / CSS',
    'SCRUM',
    'Git',

    'Design Thinking',
    'Rest API',
    'Test automation',
    'Databases'
  ];

  ImgSkills=[
    '\assets\img\Developer Akademie-Portfolio\java script.png',
    '\assets\img\Developer Akademie-Portfolio\angular.png',
    '\assets\img\Developer Akademie-Portfolio\Group 205.png',
    '\assets\img\Developer Akademie-Portfolio\Group 226.png',
    '\assets\img\Developer Akademie-Portfolio\github-fill.png',

    '\assets\img\Developer Akademie-Portfolio\Group 20.png',
    '\assets\img\Developer Akademie-Portfolio\icons8-rest-api-80 2.png',
    '\assets\img\Developer Akademie-Portfolio\icons8-test-lab-96 2.png',
    '\assets\img\Developer Akademie-Portfolio\icons8-database-52 2.png'
  ];

  constructor() { 
    //this.render();
  }

  ngOnInit(): void {
  }

  //render() {
    //let skills = document.getElementById('skills');
    //skills.innerHTML = '';
    
    //for (let i = 0; i < this.skillsArea.length; i++) {
      //const skill = this.skillsArea[i];
      //const ImgSkill = this.ImgSkills[i];

      //skills.innerHTML += `
      //<div>
        //${skill} <br>
        //${ImgSkill} <br>

      //</div>
      //`;


    //}

  }



