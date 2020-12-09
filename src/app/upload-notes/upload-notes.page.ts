import { Component, OnInit } from '@angular/core';
import { Grade } from '../models/subjects.model';
import { FilteringService } from '../services/filtering.service';

@Component({
  selector: 'app-upload-notes',
  templateUrl: './upload-notes.page.html',
  styleUrls: ['./upload-notes.page.scss'],
})
export class UploadNotesPage implements OnInit {
  carreras: Grade[];
  uploadTab: string = "archive";

  constructor(private filteringService: FilteringService,
    ) { }

    async ngOnInit() {
      this.carreras = await this.filteringService.getCarreras();
    }

    segmentChanged(event){
      console.log(event.detail["value"]);
      this.uploadTab = event.detail["value"];
    }

}
