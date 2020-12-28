import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public loading: boolean = false;
  constructor(public loginService: LoginService, public router: Router) {}

  ngOnInit(): void {}

  model: any = {};

  onSubmit() {
    this.loginService.login(this.model);
  }

  loginViaGoogle() {
    this.loading = true;
    this.loginService.loginViaGoogle().subscribe((res) => {
      this.loginService.authStore();
      this.loading = false;
      this.router.navigate(['']);
    });
  }

  loginViaFacebook() {
    this.loading = true;
    this.loginService.loginViaFacebook().subscribe((res) => {
      this.loginService.authStore();
      this.loading = false;
      this.router.navigate(['']);
    });
  }
}
