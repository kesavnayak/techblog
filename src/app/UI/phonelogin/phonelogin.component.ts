import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../service/login.service';
import firebase from 'firebase/app';
import 'firebase/auth';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-phonelogin',
  templateUrl: './phonelogin.component.html',
  styleUrls: ['./phonelogin.component.scss'],
})
export class PhoneloginComponent implements OnInit, AfterViewInit {
  phoneNumber: string;
  otp: string;
  windowRef: any;
  disableOTPSendButton = true;
  disableOTPVerifyButton = true;

  constructor(public loginService: LoginService, public router: Router) {}
  ngAfterViewInit(): void {
    this.windowRef.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      'recaptcha-container',
      {
        size: 'normal',
        callback: (response) => {
          this.disableOTPSendButton = false;
        },
        'expired-callback': function () {},
      }
    );

    this.windowRef.recaptchaVerifier.render().then((widgetId) => {
      this.windowRef.recaptchaWidgetId = widgetId;
    });
  }

  signIn(phone: string) {
    if (!phone.startsWith('+91')) {
      phone = '+91' + phone;
    }
    firebase
      .auth()
      .signInWithPhoneNumber(phone, this.windowRef.recaptchaVerifier)
      .then((confirmationResult) => {
        this.windowRef.confirmationResult = confirmationResult;
        this.disableOTPVerifyButton = false;
      })
      .catch((error) => {
        alert(error.code);
      });
  }

  ngOnInit(): void {
    //firebase.initializeApp(environment.firebaseConfig);
    this.windowRef = this.loginService.windowRef;
  }

  verifyOTP() {
    this.windowRef.confirmationResult
      .confirm(this.otp)
      .then((result) => {
        // User signed in successfully.
        const user = result.user;
        this.loginService.authStore();
        this.router.navigate(['']);
      })
      .catch((error) => {
        alert('Incorrect code entered?');
      });
  }

  resetCaptcha() {
    this.windowRef.recaptchaVerifier.render().then(function (widgetId) {
      this.windowRef.grecaptcha.reset(widgetId);
    });
  }
}
