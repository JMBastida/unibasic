import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UploadNotesPageRoutingModule } from './upload-notes-routing.module';

import { UploadNotesPage } from './upload-notes.page';
import { DndDirective } from './dnd.directive';
import { UploaderComponent } from './uploader/uploader.component';
import { ProgressComponent } from './progress/progress.component';
import { UrlUploaderComponent } from './url-uploader/url-uploader.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UploadNotesPageRoutingModule
  ],
  declarations: [UploadNotesPage, DndDirective, UploaderComponent, ProgressComponent, UrlUploaderComponent]
})
export class UploadNotesPageModule {}
