import { Component, OnInit } from '@angular/core';
// import { setInterval } from 'timers'; gelöscht.

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  images = ['Mühlbach2.jpg', 'Mühlbach9.jpg', 'Mühlbach16.jpg'];
  currentImage = 0;
  showImage = true;

  /**
   * OnInit-Funktion wird immer am Anfang, wenn unsere app components lädt, ausgeführt.
   */
  ngOnInit() {
    this.updateImage();
  }

  updateImage() {
    setInterval(() => {
      this.currentImage++;
      this.currentImage = this.currentImage % this.images.length;
      this.showImage = false;

      setTimeout(() => {
        this.showImage = true;
      }, 10);
    }, 8000);
  }

}
