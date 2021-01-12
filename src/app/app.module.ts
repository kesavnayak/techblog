import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
import { CompanyquestionsComponent } from './UI/companyquestions/companyquestions.component';
import { AngularComponent } from './UI/angular/angular.component';
import { MustMatchDirective } from './directive/must-match.directive';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { CoreComponent } from './UI/core/core.component';

import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';

import {
  IgxButtonModule,
  IgxIconModule,
  IgxCardModule,
  IgxRippleModule,
} from 'igniteui-angular';
import { UixComponent } from './UI/uix/uix.component';
import { XamarinComponent } from './UI/xamarin/xamarin.component';
import { WebapiComponent } from './UI/webapi/webapi.component';

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
    CompanyquestionsComponent,
    AngularComponent,
    MustMatchDirective,
    CoreComponent,
    UixComponent,
    XamarinComponent,
    WebapiComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule,
    AngularFireAuthModule,
    ShareButtonsModule.withConfig({
      debug: true,
    }),
    ShareIconsModule,
    IgxButtonModule,
    IgxIconModule,
    IgxCardModule,
    IgxRippleModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
