import { Component, OnInit } from '@angular/core';
import { EmploymentListModel } from 'src/app/model/employment-list-model';
import { EmploymentService } from 'src/app/services/employment.service';

@Component({
  selector: 'app-list-employment',
  templateUrl: './list-employment.component.html',
  styleUrls: ['./list-employment.component.css']
})
export class ListEmploymentComponent implements OnInit {

  //employsList!: EmploymentListModel[];
  public employsList: EmploymentListModel[] = [];
  constructor(private employtmentsService: EmploymentService) { }
  

  ngOnInit(): void {
    this.employtmentsService.getProducts().then(data => this.employsList = data);
    //this.employsList = this.employtmentsService.getProducts();
    console.log(this.employtmentsService);

  }

}
