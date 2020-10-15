import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['../../home.page.scss','./featured.component.scss'],
})
export class FeaturedComponent implements OnInit {

  options = {
    centeredSlides: true,
    slidesPerView: 1,
    spaceBetween: -60,
  };

  constructor() { }

  ngOnInit() {}

}
