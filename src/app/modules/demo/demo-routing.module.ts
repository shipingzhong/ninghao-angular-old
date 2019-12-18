import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemoComponent } from './demo.component';
import { ChildRoutesComponent } from './child-routes/child-routes.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth/auth.guard';
import { ObservableDemoComponent } from './observable-demo/observable-demo.component';
// import { AdminComponent } from './admin/admin.component';
// import { AuthGuard } from './auth/auth.guard';
// import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
// import { PostComponent } from '../post/post.component';
// import { CanDeactiveGuard } from './admin/can-deactive.guard';


const routes: Routes = [
  {
    path:'', component:DemoComponent,
    children:[
      { path: 'child-routes',component:ChildRoutesComponent},
      { path: 'login',component:LoginComponent},
      { 
        path: 'admin',
        loadChildren:()=>import('./admin/admin.module').then(module=>module.AdminModule),
        // canLoad:[AuthGuard]
      },
      {
        path:'observable',
        component:ObservableDemoComponent
      }
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }
