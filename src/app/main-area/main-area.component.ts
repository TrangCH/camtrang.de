import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-area',
  templateUrl: './main-area.component.html',
  styleUrls: ['./main-area.component.scss']
})
export class MainAreaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    //window.onscroll = function () { this.animationOnlyWhenTheComponentIsVisible() };
  }

  

  //animationOnlyWhenTheComponentIsVisible() {
  //  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
  //    document.getElementById("introductionCssTyping").classList.remove("css-typing");
  //  } else {
  //    document.getElementById("introductionCssTyping").classList.add("css-typing");
  //  }
  //}

}
