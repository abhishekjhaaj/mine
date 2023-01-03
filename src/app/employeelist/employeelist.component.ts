import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.scss']
})
export class EmployeelistComponent implements OnInit {

  employeeList=[
    {id:1,name:"Abhishek Jha",age:28},
    {id:2,name:"Abhishek Sharma ",age:23},
    {id:3,name:"Abhishek Jha",age:24},
    {id:4,name:"Abhishek Jha",age:25},
    {id:5,name:"Abhishek Jha",age:29},
  ]
  emp: any;
  constructor() { }

  ngOnInit(): void {
  }
  details(value:any){
         this.emp=value;
          }

}
