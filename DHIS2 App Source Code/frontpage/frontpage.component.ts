import { Component, Input, OnInit } from '@angular/core';

interface frontpageImage {
  imageSrc: string;
  imageAlt: string;
}

@Component({
  selector: 'app-frontpage',
  templateUrl: './frontpage.component.html',
  styleUrls: ['./frontpage.component.css']
})
export class FrontpageComponent implements OnInit{

  @Input() images: frontpageImage[] = []
  @Input() indicators = true;
  @Input() controls = true;
  @Input() autoSlide = false;
@Input() slideInterval = 3000; //Default to 3 seconds

  selectedIndex = 0;

  ngOnInit(): void {
      if(this.autoSlide) {
        this.autoSlideImages();
      }
  }

  //changes slides in every 3 seconds
  autoSlideImages() {
    setInterval(() => {
      this.onNextClick();
    }, this.slideInterval);
  }

  // sets index of image on dot/indicator click
  selectImage(index: number) {
this.selectedIndex = index;
  }

  onPrevClick() {
    if(this.selectedIndex === 0) {
      this.selectedIndex = this.images.length - 1;
    } else {
      this.selectedIndex--;
    }
  }

  onNextClick() {
    if(this.selectedIndex = this.images.length - 1) {
      this.selectedIndex === 0;
    } else {
      this.selectedIndex++;
    }
  }
}
