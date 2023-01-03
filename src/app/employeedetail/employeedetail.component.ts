import { Component, Input, OnInit } from '@angular/core';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-employeedetail',
  templateUrl: './employeedetail.component.html',
  styleUrls: ['./employeedetail.component.scss']
})
export class EmployeedetailComponent implements OnInit {

  // employeeList=[
  //   {id:1,name:"Abhishek Jha",age:28},
  //   {id:2,name:"Abhishek Sharma ",age:23},
  //   {id:3,name:"Abhishek Jha",age:24},
  //   {id:4,name:"Abhishek Jha",age:25},
  //   {id:5,name:"Abhishek Jha",age:29},
  // ]  not required now as we moved to service class

  employee:any=[];
  @Input() detail="";
  employee1:any;
  constructor(private empService:EmployeeService) { }

  ngOnInit(): void {
    this.employee=this.empService.getEmployees();
  }
  getDetails(value:any){
    this.employee1=value;
    console.log(this.employee1);
    
  }

}
