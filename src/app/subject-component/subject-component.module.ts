import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubjectComponent } from './subject-ccomponent.component';
import { IonicModule } from '@ionic/angular';
import { NoteItemComponent } from './components/note-item/note-item.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SubjectComponent, NoteItemComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([
      { path: '', component: SubjectComponent }
    ])
  ]
})
export class SubjectComponentModule { }
