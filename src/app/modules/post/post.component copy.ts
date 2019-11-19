import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  title = 'Posts';
  entities = [{title:'hello',body:'Sit do ullamco incididunt irure veniam sint exerciation proident.'},
  {title:'hola',body:'Culpa lorem in qui ad aliqua cupidatat.'},
  {title:'您好'}]

  constructor() { }

  ngOnInit() {
  }

  removeItem(item:number){
    console.log('remove...');
    this.entities = this.entities.filter((entity,index)=>{
      return index !== item;
    })
  }

}
