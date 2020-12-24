import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  constructor(private loginService: LoginService) {}

  model: any = {};

  onSubmit() {
    this.loginService.register(this.model);
  }

  ngOnInit(): void {}
}
