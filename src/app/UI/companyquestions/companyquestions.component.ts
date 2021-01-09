import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-companyquestions',
  templateUrl: './companyquestions.component.html',
  styleUrls: ['./companyquestions.component.scss'],
})
export class CompanyquestionsComponent implements OnInit {
  constructor(public loginService: LoginService) {}

  ngOnInit(): void {}
}
