import { Component } from '@angular/core';
import { Router } from '@angular/router';
// import { setInterval } from 'timers'; gelöscht.

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  

  // Mit public lässt sich der router von überall aus zugreifen.
  // Nicht mehr nur aus der JS-Teil, sondern auch aus dem HTML Teil.
  constructor(public router: Router) { }




}
