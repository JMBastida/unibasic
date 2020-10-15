import { Injectable } from '@angular/core';
import * as faker from 'faker';
import { ListItem } from '../models/list-item.model';

/*
  Generated class for the Agenda provider.
  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ListFakeData {

  constructor() {}

  getContacts():ListItem[]{
    let contacts = [];
    for(let i=0; i< 500; i++){
      let contact:ListItem ={
        title:faker.commerce.productName(),
        description:faker.commerce.productDescription(),
        imgUrl: faker.image.avatar()
      }
      contacts.push(contact);
    }

    contacts.sort((a:ListItem, b:ListItem)=>{
      if (a.title < b.title)
        return -1;
      if(a.title > b.title)
        return 1;
      else return 0;
    });
    

    return contacts;
  }

}