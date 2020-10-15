import { Component, OnInit } from '@angular/core';
import { ListItem } from 'src/app/models/list-item.model';
import { ListFakeData } from 'src/app/services/fake-data';

@Component({
  selector: 'app-filtering',
  templateUrl: './filtering.component.html',
  styleUrls: ['./filtering.component.scss'],
})
export class FilteringComponent implements OnInit {

  public items:Array<ListItem> = new Array<ListItem>();


  constructor(private listData: ListFakeData) { }

  ngOnInit(){
    this.items = this.listData.getContacts();
    console.log(this.items);
    
  }

  checkInitialChange(item, itemIndex, items){
    if(itemIndex == 0)
      return item.title[0];

    if(item.title[0] != items[itemIndex-1].title[0])
      return item.title[0];
    
    return null;
  }


}
