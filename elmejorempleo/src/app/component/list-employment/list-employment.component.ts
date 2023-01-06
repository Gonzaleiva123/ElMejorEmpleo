import { Component, OnInit, Output } from '@angular/core';
import { EmploymentService } from 'src/app/services/employment.service';
import { __values } from 'tslib';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { isEmpty } from '@firebase/util';

@Component({
  selector: 'app-list-employment',
  templateUrl: './list-employment.component.html',
  styleUrls: ['./list-employment.component.css']
})
export class ListEmploymentComponent implements OnInit {
  empleos: any[] = [];
  validationUser: boolean = false;
  userData: any;

  constructor(
      private employtmentsService: EmploymentService, 
      private toast: ToastrService,
      public authService: AuthService, 
      public afAuth: AngularFireAuth
      ) { 

        if(this.authService.userData != isEmpty){
          this.afAuth.authState.subscribe((user) => {
            if (user) {
            //  this.userData = user;
              console.log(this.userData)
              this.validationUser = true;
             
            } else {
              this.validationUser = false;
            }
          });    
         }

      }  

  ngOnInit(): void {
    this.getEmpleos();
  }

  getEmpleos(){
    this.employtmentsService.getAllEmpleos().subscribe(data => {
      this.empleos = [];
      data.forEach((element: any) => {
        this.empleos.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })
        console.log( this.empleos);

      });
    })
  }

  deleteEmpleos(id: string){
    this.employtmentsService.eliminarEmpleo(id).then(() => {
      this.toast.error('El Empleo fue eliminado con exito', 'Registro eliminado');     
    }).catch(error => {
    } )
  }

}
