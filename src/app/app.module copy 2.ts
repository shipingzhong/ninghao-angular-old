import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostModule } from './modules/post/post.module';
import { AppRoutingModule } from './app-routing.module';
import { UserModule } from './modules/user/user.module';
import { HeaderComponent } from './core/components/header/header.component';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { DemoModule } from './modules/demo/demo.module';
import { MessageBoxComponent } from './core/components/message-box/message-box.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PageNotFoundComponent,
    MessageBoxComponent
  ],
  imports: [
    BrowserModule,
    PostModule,
    UserModule,
    DemoModule,
    AppRoutingModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
