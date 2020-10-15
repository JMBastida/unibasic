import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { ActivitiesComponent } from './components/activities/activities.component';
import { FeaturedComponent } from './components/featured/featured.component';
import { FadeComponent } from '../animations/fade/fade.component';
import { FilteringComponent } from './components/filtering/filtering.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, ActivitiesComponent, FeaturedComponent, FadeComponent, FilteringComponent]
})
export class HomePageModule {}
