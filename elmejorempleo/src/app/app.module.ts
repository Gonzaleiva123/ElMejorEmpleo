import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ListEmploymentComponent } from './component/list-employment/list-employment.component';
import {DataViewModule} from 'primeng/dataview';
import { HttpClientModule } from '@angular/common/http';
import { DetailEmploymentComponent } from './component/detail-employment/detail-employment.component';
import { ReactiveFormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

//import { initializeApp } from 'firebase/app';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app'
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { ToastrModule } from 'ngx-toastr';
import { LoginComponent } from './component/login/login.component';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AuthService } from './services/auth.service';
import { SignUpComponent } from './component/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './component/verify-email/verify-email.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ListEmploymentComponent,
    DetailEmploymentComponent,
    LoginComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataViewModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    
 

    
  /* provideFirebaseApp(() => initializeApp(environment.firebase)),
   provideFirestore(() => getFirestore()),*/
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
