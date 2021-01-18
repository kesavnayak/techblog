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

import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

import {
  IgxButtonModule,
  IgxIconModule,
  IgxCardModule,
  IgxRippleModule,
} from 'igniteui-angular';
import { UixComponent } from './UI/uix/uix.component';
import { XamarinComponent } from './UI/xamarin/xamarin.component';
import { WebapiComponent } from './UI/webapi/webapi.component';
import { DevOpsComponent } from './UI/dev-ops/dev-ops.component';
import { AzureComponent } from './UI/azure/azure.component';
import { EfComponent } from './UI/ef/ef.component';
import { DockerComponent } from './UI/docker/docker.component';
import { PhoneloginComponent } from './UI/phonelogin/phonelogin.component';

import { MatSnackBarModule } from '@angular/material/snack-bar';

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
    DevOpsComponent,
    AzureComponent,
    EfComponent,
    DockerComponent,
    PhoneloginComponent,
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
    NgxSkeletonLoaderModule,
    MatSnackBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
