import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { AngularFireObject } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class EmploymentService {

  tutorial: AngularFireObject<any>;
  items: Observable<any>;

  constructor(private firestore: AngularFirestore ) {   
  }
  
  //metodo para obtener todo los empleos utilizando firestore//
  //empleado: nombre de la base de datos de firestore//
  getAllEmpleos(): Observable<any>{
    return this.firestore.collection('empleos').snapshotChanges();    
  }
  
  //metodo para agregar un empleo nuevo utilizando firestore//
  //empleado: nombre de la base de datos de firestore//
  addEmpleo(empleo: any): Promise<any>{
    return this.firestore.collection('empleos').add(empleo);
  }

  //metodo para eliminar un empleo utilizando firestore//
  //empleado: nombre de la base de datos de firestore//
  eliminarEmpleo(id: string): Promise<any>{
    return this.firestore.collection('empleos').doc(id).delete();
  }

  //metodo para obtener un empleo por medio de su ID, utilizando firestore//
  //empleado: nombre de la base de datos de firestore//
  getEmpleo(id: string): Observable<any>{
    return this.firestore.collection('empleos').doc(id).snapshotChanges();
  }

  //metodo para actualizar un empleo por medio de su ID y cargando su informacion por medio de la variable DATA, utilizando firestore//
  //empleado: nombre de la base de datos de firestore//
  actualizarEmpleo(id: string, data: any):Promise<any>{
    return this.firestore.collection('empleos').doc(id).update(data);
  }

}
