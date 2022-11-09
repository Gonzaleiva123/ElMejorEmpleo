import { Component, OnInit, Output } from '@angular/core';
import { EmploymentService } from 'src/app/services/employment.service';
import { __values } from 'tslib';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-employment',
  templateUrl: './list-employment.component.html',
  styleUrls: ['./list-employment.component.css']
})
export class ListEmploymentComponent implements OnInit {
  empleos: any[] = [];

  constructor(
      private employtmentsService: EmploymentService, 
      private toast: ToastrService,
      ) { 
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
