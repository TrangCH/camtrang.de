import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit {

  images = ['Mühlbach2.jpg', 'Mühlbach9.jpg', 'Mühlbach16.jpg'];
  headlines = [
    'Bring engineering to the next level',
    'Born to code',
    'Graduated at TUM'
  ];
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
