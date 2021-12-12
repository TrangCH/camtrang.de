import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  // Annotation: Extra Eigenschaft einer Variable oder Funktion
  @Input() darkMode = true;

  constructor() { }

  ngOnInit(): void {
  }

}
