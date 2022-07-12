import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmploymentListModel } from '../model/employment-list-model';

@Injectable({
  providedIn: 'root'
})
export class EmploymentService {
  constructor(private http: HttpClient) { 
  }
  
  getProducts() {
    return this.http.get<any>('assets/employments.json')
    .toPromise()
    .then(res => <EmploymentListModel[]>res.data)
    .then(data => { return data; });
  }

}
