import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListEmploymentComponent } from './component/list-employment/list-employment.component';

const routes: Routes = [
  { path: '', redirectTo: 'listEmployment', pathMatch: 'full' },
  { path: 'listEmployment', component: ListEmploymentComponent} 
 // { path: 'listEmployment',
   // loadChildren: () => import('./component/list-employment/list-employment.component').then(m => m.ListEmploymentComponent)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
