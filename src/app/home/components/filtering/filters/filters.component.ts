import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'search-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }

}
