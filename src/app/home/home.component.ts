import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @Input('parentData') data:any;
  @Output() childData= new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  fireEvent()
  {
    this.childData.emit('Hey I am');
  }

}
