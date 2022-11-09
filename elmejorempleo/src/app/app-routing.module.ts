import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailEmploymentComponent } from './component/detail-employment/detail-employment.component';
import { ListEmploymentComponent } from './component/list-employment/list-employment.component';

const routes: Routes = [
  { path: '', redirectTo: '/listEmployment', pathMatch: 'full' },
  { path: 'listEmployment', component: ListEmploymentComponent}, 
  { path: 'DetailEmployment', component: DetailEmploymentComponent},
  { path: 'editDetailEmployment/:id', component: DetailEmploymentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
