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
import { MainComponent } from './main/main.component';
import { LoginComponent } from './UI/login/login.component';
import { SignupComponent } from './UI/signup/signup.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';

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
    MainComponent,
    LoginComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
