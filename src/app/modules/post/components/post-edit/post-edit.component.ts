import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../../service/post.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit {
  postEditForm = this.formBuilder.group({
    title:[''],
    body:[''],
    image:[''],

  })

  constructor(private formBuilder:FormBuilder,
    private route:ActivatedRoute,
    private postService:PostService) { }

  ngOnInit() {
    //加号是把字符串(或其它类型)转换为数字类型
    // console.log(this.route.snapshot.paramMap.get('id'));
    // console.log("AAAAAAAA"+this.route.snapshot.paramMap.get('id'));
    this.route.paramMap.pipe(switchMap(params=>this.postService.show(+params.get('id'))))
    .subscribe(data=>{
      this.postEditForm.patchValue(data);
    });
  }

  onSubmit(){
    console.log(this.postEditForm.value);
    this.postService.update(+this.route.snapshot.paramMap.get('id'),this.postEditForm.value)
    .subscribe();
  }

}
