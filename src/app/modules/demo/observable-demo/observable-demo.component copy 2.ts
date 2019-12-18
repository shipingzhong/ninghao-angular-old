import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-obervable-demo',
  templateUrl: './obervable-demo.component.html',
  styleUrls: ['./obervable-demo.component.css']
})
export class ObervableDemoComponent implements OnInit {
  demoObervable:Observable<string>;


  constructor() { }

  ngOnInit() {
    this.demoObervable = of('hello','hola','您好');
  }

  onClick(){
    const observer = {
      next: value=>console.log(value),
      error: error=>console.log(error),
      complete: ()=>console.log('Demo obervable completed'),
    }
    this.demoObervable.subscribe(observer);
  }

}
