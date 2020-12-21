import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CsharpComponent } from './UI/csharp/csharp.component';
import { DashboardComponent } from './UI/dashboard/dashboard.component';
import { InterviewquestionsComponent } from './UI/interviewquestions/interviewquestions.component';
import { OopsComponent } from './UI/oops/oops.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'interview/csharp', component: CsharpComponent },
  { path: 'interview/oops', component: OopsComponent },
  { path: 'interview', component: InterviewquestionsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
