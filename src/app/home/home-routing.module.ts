import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home'
  },
  {
    path: 'estudios/:id',
    loadChildren: () =>
      import('../subject-component/subject-component.module').then((m) => m.SubjectComponentModule),
  },
  {
    path: 'home',
    component: HomePage,
    //canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
