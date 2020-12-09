import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'url-uploader',
  templateUrl: './url-uploader.component.html',
  styleUrls: ['./url-uploader.component.scss'],
})
export class UrlUploaderComponent implements OnInit {

  urls: string[] = [];
  counter = 0;

  constructor() { }

  ngOnInit() {}

  /**
   * Delete file from files list
   * @param index (File index)
   */
  deleteFile(index: number) {
    this.urls.splice(index, 1);
    this.counter = this.urls.length;
    console.log(this.counter);
    
  }

  urlSubmitted(event) {// emitted each time input changes
    this.urls[this.counter] = event.detail.value;
  }

  nextUrl(){ //Add Url(validating input to url pattern)
    var expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
    var regex = new RegExp(expression);
    if (this.urls[this.counter].match(regex) && this.urls[this.counter].length >= 2) {
      this.counter++;
    }else{
      console.log("ERROR");
    }
    console.log(this.counter);
  }

}
