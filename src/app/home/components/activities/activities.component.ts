import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['../../home.page.scss','./activities.component.scss'],
})
export class ActivitiesComponent implements OnInit {

  categories = {
    slidesPerView: 2.5,
  };
  
  constructor() { }

  ngOnInit() {}

}
