import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Post } from '../models/post.model';
import { PostService } from '../service/post.service';

@Injectable({
  providedIn: 'root'
})
export class PostDetailResolveService implements Resolve<Post> {
  // resolve(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot): Post | import("rxjs").Observable<Post> | Promise<Post> {
  //   throw new Error("Method not implemented.");
  // }
  constructor(private postService:PostService) { }

  resolve(route:ActivatedRouteSnapshot):Post{
    console.log('Post detail resolve service.');
    const postId = +route.paramMap.get('id'); //前面加个加字就是把字符串转换成数字类型
    // return {
    //   id:1,
    //   title:'hello',
    // }
    return this.postService.show(postId);
  }

}
