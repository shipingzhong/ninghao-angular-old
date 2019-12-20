import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../../models/post.model';
import { PostService } from '../../service/post.service';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css'],
})
export class PostItemComponent implements OnInit {
  
  @Input()
  entity:Post;

  @Output()
  remove = new EventEmitter();
  constructor(private postService:PostService) {}

  ngOnInit() {}
  onClick(){
    this.remove.emit(this.entity);
  }

  addToList(entity:Post){
    this.postService.addToList(entity).subscribe();
  }
}
