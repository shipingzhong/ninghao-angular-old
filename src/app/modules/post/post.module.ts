import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post.component';
import { AppRoutingModule } from '../../app-routing.module';
import { PostItemComponent } from './components/post-item/post-item.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';

@NgModule({
  declarations: [PostComponent, PostItemComponent, PostDetailsComponent],
  imports: [CommonModule, AppRoutingModule],
  exports: [PostComponent],
})
export class PostModule {}
