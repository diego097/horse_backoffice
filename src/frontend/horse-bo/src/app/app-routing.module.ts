import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { RetirementComponent } from './retirement/retirement.component';
import { ResultComponent } from './result/result.component';
import { NotificationComponent } from './notification/notification.component';
import { MenuComponent } from './menu/menu.component';
import { InitialcontentComponent } from './initialcontent/initialcontent.component';


const routes: Routes = [
  {
    path: 'auth', component: AppComponent,
    children: [
      { path: '', component: LoginComponent }
      //{ path: 'forgotpassword', component: ForgotPassComponent },
    ]//,canActivate: [AuthLoginGuard]
  },
  {
    path: '', component: ContentComponent,
    children:[
      { path: '', redirectTo: '/home', pathMatch: 'full' },//defecto
      { path: 'home', component: InitialcontentComponent, canActivate: [AuthGuard] },
      { path: 'retirement', component: RetirementComponent, canActivate: [AuthGuard] },
      { path: 'result', component: ResultComponent , canActivate: [AuthGuard]},
      { path: 'notification', component: NotificationComponent, canActivate: [AuthGuard] },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
