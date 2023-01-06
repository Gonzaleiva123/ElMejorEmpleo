import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailEmploymentComponent } from './component/detail-employment/detail-employment.component';
import { ListEmploymentComponent } from './component/list-employment/list-employment.component';
import { LoginComponent } from './component/login/login.component';
import { AuthGuard } from './shared/guard/auth.guard';
import { SignUpComponent } from './component/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './component/verify-email/verify-email.component';


const routes: Routes = [
  { path: '', redirectTo: '/listEmployment', pathMatch: 'full' },
  { path: 'listEmployment', component: ListEmploymentComponent}, 
  { path: 'DetailEmployment', component: DetailEmploymentComponent, canActivate: [AuthGuard]},
  { path: 'editDetailEmployment/:id', component: DetailEmploymentComponent, canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent},
  { path: 'register-user', component: SignUpComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-email-address', component: VerifyEmailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
