import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { isEmpty } from '@firebase/util';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit { 
  varEmail: any;
  validation: boolean = false;
  userData: any;

  constructor(public authService: AuthService, public afAuth: AngularFireAuth) { 
    console.log(this.authService);
    if(this.authService.userData != isEmpty){
      this.afAuth.authState.subscribe((user) => {
        if (user) {
          console.log(this.userData)
          this.validation = true;
          this.varEmail = user.email 
        } else {
          this.validation = false;
        }
      });    
     }   
  } 
  ngOnInit(): void {
  }

}
