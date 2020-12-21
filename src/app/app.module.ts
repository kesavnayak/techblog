import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar/sidebar.component';
import { HeaderComponent } from './sidebar/header/header.component';
import { FooterComponent } from './sidebar/footer/footer.component';
import { DashboardComponent } from './UI/dashboard/dashboard.component';
import { ScrollTopComponent } from './plugin/scroll-top/scroll-top.component';
import { CsharpComponent } from './UI/csharp/csharp.component';
import { OopsComponent } from './UI/oops/oops.component';
import { PretagComponent } from './plugin/pretag/pretag.component';
import { InterviewquestionsComponent } from './UI/interviewquestions/interviewquestions.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    ScrollTopComponent,
    CsharpComponent,
    OopsComponent,
    PretagComponent,
    InterviewquestionsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
