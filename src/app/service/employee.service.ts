import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  getEmployees(){

   return [
      {id:1,name:"Abhishek Jha",age:28},
      {id:2,name:"Abhishek Sharma ",age:23},
      {id:3,name:"Abhishek Verma",age:24},
      {id:4,name:"Abhishek Kumar",age:25},
      {id:5,name:"Abhishek kk",age:29},
    ];
  }

  getEmployees1(value:any){

    return [
       {id:1,name:"Abhishek Jha",age:28},
       {id:2,name:"Abhishek Sharma ",age:23},
       {id:3,name:"Abhishek Verma",age:24},
       {id:4,name:"Abhishek Kumar",age:25},
       {id:5,name:"Abhishek kk",age:29},
     ];
   }
  constructor() { }
}
