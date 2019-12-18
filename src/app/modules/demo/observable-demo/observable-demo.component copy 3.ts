import { Component, OnInit } from '@angular/core';
import { Observable, of, Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-obervable-demo',
  templateUrl: './obervable-demo.component.html',
  styleUrls: ['./obervable-demo.component.css']
})
export class ObervableDemoComponent implements OnInit {
  demoObervable:Observable<any>;
  demoSubscription:Subscription;


  constructor() { }

  ngOnInit() {
    // this.demoObervable = of('hello','hola','您好');
    this.demoObervable = interval(1000);
  }

  onClick(){
    const observer = {
      next: value=>console.log(value),
      error: error=>console.log(error),
      complete: ()=>console.log('Demo obervable completed'),
    }
    this.demoSubscription = this.demoObervable.subscribe(observer);
  }

  unsubscribe(){
    this.demoSubscription.unsubscribe();
  }

}
