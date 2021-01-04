import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  public loading: boolean = false;

  constructor(public loginService: LoginService, public router: Router) {}

  model: any = {};

  onSubmit() {
    this.loginService.register(this.model);
  }

  ngOnInit(): void {}

  loginViaGoogle() {
    this.loginService.loginViaGoogle();
  }

  loginViaFacebook() {
    this.loginService.loginViaFacebook();
  }
}
