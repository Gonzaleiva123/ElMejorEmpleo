import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { AngularFireList  } from '@angular/fire/compat/database'
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EmploymentService } from 'src/app/services/employment.service';

@Component({
  selector: 'app-detail-employment',
  templateUrl: './detail-employment.component.html',
  styleUrls: ['./detail-employment.component.css']
})
export class DetailEmploymentComponent implements OnInit {
  public FormEmployment: FormGroup;
  empleoformtest: AngularFireList<any[]>;
  id: string | null;
  titulo = 'Agregar Empleo';

  constructor( 
        private FormBuilder: FormBuilder,  
        private router: Router,
        private toastr: ToastrService,
        private route: ActivatedRoute,        
        private _empleoService: EmploymentService      
    ) { 
    this.id = this.route.snapshot.paramMap.get('id');   
  }

  creatForm(){
  this.FormEmployment = this.FormBuilder.group({
      empleo: new FormControl(null, Validators.required),
      descripcion: new FormControl(null, Validators.required),
      imagen: new FormControl(null, Validators.required),
      requisitos: new FormControl(null, Validators.required),
      prestaciones: new FormControl(null, Validators.required),
      lugar: new FormControl(null, Validators.required),
    });
  }

  ngOnInit(): void {
    this.creatForm();
    this.isUpdate();
  }

  agregarEditarEmpleo(){
    if(this.FormEmployment.invalid){    
      return;
    }  

    if(this.id === null){
       this.add()
    }else{
      this.updateEmpleo(this.id);
    }
  }
 
 
  add() {    
    const empleoForm: any = {
      empleo: this.FormEmployment.value.empleo,
      descripcion: this.FormEmployment.value.descripcion,
      requisitos: this.FormEmployment.value.requisitos,
      prestaciones: this.FormEmployment.value.prestaciones,
      imagen: this.FormEmployment.value.imagen,
      lugar: this.FormEmployment.value.lugar,
    }

    this._empleoService.addEmpleo(empleoForm).then(() => 
      {
        this.toastr.success('Empleo Guardado exitodamente!', 'Empleo Guardado' );
        this.router.navigate(['/'])
      }).catch(error => {
        console.log(error)
      });
  }


  updateEmpleo(id: string){

    const empleoForm: any = {
      empleo: this.FormEmployment.value.empleo,
      descripcion: this.FormEmployment.value.descripcion,
      requisitos: this.FormEmployment.value.requisitos,
      prestaciones: this.FormEmployment.value.lugar,
      imagen: this.FormEmployment.value.imagen,
      lugar: this.FormEmployment.value.lugar,
    }

    this._empleoService.actualizarEmpleo(id, empleoForm).then(() => {
      this.toastr.info('El empleo fue modificado exitodamente!', 'Empleo Modificado' );
      this.router.navigate(['/']);
    }).catch(error => {
      console.log(error);
    });
  }


  isUpdate() {    
    if(this.id !== null){
      this.titulo = 'Editar Empleo';
      this._empleoService.getEmpleo(this.id).subscribe(data => {
        this.FormEmployment.setValue({
          empleo: data.payload.data()['empleo'],
          descripcion: data.payload.data()['descripcion'],
          requisitos: data.payload.data()['requisitos'],
          prestaciones: data.payload.data()['prestaciones'],
          imagen: data.payload.data()['imagen'],
          lugar: data.payload.data()['lugar'],
        })
      })
    }
  }

  imagenSelector: string;
  selectImagen(imagen: string){
    this.imagenSelector = imagen;
    this.FormEmployment.patchValue({
      imagen: this.imagenSelector
    });    
      

  }

}
