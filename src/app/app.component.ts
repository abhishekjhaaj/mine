import { JsonPipe, getCurrencySymbol } from '@angular/common';
import { Component } from '@angular/core';
import { ViewtestService } from './viewtest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mine';
  success="green";
  name1:any;
  data="Mine";
  msg="";
  data1: any;
  error1: any;
inputValue: any;
amount=200.012;
currentdate= new Date();
dataChange()
{
  console.log(this.inputValue||JSON);
  
}
  constructor(private viewTestService:ViewtestService){
    this.viewTestService.getViewTest().subscribe(data=>
      {
        this.data1=data;
        console.log(this.data1);
},(error)=>{console.log(error);
  this.error1=error;
  });
  }

  
  
  logMsg(value:any){
    console.log(value);
    // this.name1=value;
    
  }
}
