import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demo-routing.module';
import { DemoComponent } from './demo.component';
import { ChildRoutesComponent } from './child-routes/child-routes.component';
import { LoginComponent } from './login/login.component';
import { ObservableDemoComponent } from './observable-demo/observable-demo.component';

// import { AdminComponent } from './admin/admin.component';
// import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
// import { PostModule } from '../post/post.module';
// import { AdminModule } from './admin/admin.module';


@NgModule({
  declarations: [DemoComponent, ChildRoutesComponent, LoginComponent, ObservableDemoComponent, 
    //AdminComponent, AdminDashboardComponent
  ],
  imports: [
    CommonModule,
    DemoRoutingModule,
    // PostModule,
    //AdminModule
  ]
})
export class DemoModule { }
