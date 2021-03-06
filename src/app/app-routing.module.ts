import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { PhoneloginComponent } from './UI/phonelogin/phonelogin.component';
import { AngularComponent } from './UI/angular/angular.component';
import { AzureComponent } from './UI/azure/azure.component';
import { CompanyquestionsComponent } from './UI/companyquestions/companyquestions.component';
import { CoreComponent } from './UI/core/core.component';
import { CsharpComponent } from './UI/csharp/csharp.component';
import { DashboardComponent } from './UI/dashboard/dashboard.component';
import { DevOpsComponent } from './UI/dev-ops/dev-ops.component';
import { DockerComponent } from './UI/docker/docker.component';
import { EfComponent } from './UI/ef/ef.component';
import { InterviewquestionsComponent } from './UI/interviewquestions/interviewquestions.component';
import { LoginComponent } from './UI/login/login.component';
import { OopsComponent } from './UI/oops/oops.component';
import { SignupComponent } from './UI/signup/signup.component';
import { UixComponent } from './UI/uix/uix.component';
import { WebapiComponent } from './UI/webapi/webapi.component';
import { XamarinComponent } from './UI/xamarin/xamarin.component';
import { SqlserverComponent } from './UI/sqlserver/sqlserver.component';
import { ArticleListComponent } from './UI/articles/article-list/article-list.component';
import { ArticlesComponent } from './UI/articles/articles/articles.component';
import { ArticleComponent } from './UI/articles/article/article.component';

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
      { path: 'interview/webapi', component: WebapiComponent },
      { path: 'interview/DevOps', component: DevOpsComponent },
      { path: 'interview/Azure', component: AzureComponent },
      { path: 'interview/Ef', component: EfComponent },
      { path: 'interview/Docker', component: DockerComponent },
      { path: 'interview/SqlServer', component: SqlserverComponent },
      { path: 'interview', component: InterviewquestionsComponent },
      { path: 'company', component: CompanyquestionsComponent },
      { path: 'uix', component: UixComponent },
      { path: 'uix/xamarin', component: XamarinComponent },
      { path: 'articlelist', component: ArticleListComponent },
      { path: 'articlelist/articles/:id', component: ArticlesComponent },
      { path: 'articlelist/articles/:id/article/:id', component: ArticleComponent },
    ],
  },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'phone', component: PhoneloginComponent },
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
