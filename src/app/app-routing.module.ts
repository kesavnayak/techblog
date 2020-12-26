import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AngularComponent } from './UI/angular/angular.component';
import { CompanyquestionsComponent } from './UI/companyquestions/companyquestions.component';
import { CoreComponent } from './UI/core/core.component';
import { CsharpComponent } from './UI/csharp/csharp.component';
import { DashboardComponent } from './UI/dashboard/dashboard.component';
import { InterviewquestionsComponent } from './UI/interviewquestions/interviewquestions.component';
import { LoginComponent } from './UI/login/login.component';
import { OopsComponent } from './UI/oops/oops.component';
import { SignupComponent } from './UI/signup/signup.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'interview/csharp', component: CsharpComponent },
      { path: 'interview/oops', component: OopsComponent },
      { path: 'interview/angular', component: AngularComponent },
      { path: 'interview/core', component: CoreComponent },
      { path: 'interview', component: InterviewquestionsComponent },
      { path: 'company', component: CompanyquestionsComponent },
    ],
  },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {
    path: '**',
    redirectTo: '/login',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
