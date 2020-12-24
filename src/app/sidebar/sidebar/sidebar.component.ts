import { Component, Input, OnInit } from '@angular/core';
import { Category } from 'src/app/model/category';
import { CategoryService } from 'src/app/service/category.service';
import { LoginService } from 'src/app/service/login.service';
import { SidenavService } from '../sidenav.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  public categories: any;
  constructor(
    public sideNavService: SidenavService,
    public categoryService: CategoryService,
    public loginService: LoginService
  ) {}

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.categoryService.getCategories().subscribe((res) => {
      this.categories = res.map((e) => {
        return {
          categoryId: e.payload.doc.id,
          categoryName: e.payload.doc.data()['CategoryName'],
          categoryIcon: e.payload.doc.data()['CategoryIcon'],
          categoryLink: e.payload.doc.data()['CategoryLink'],
        };
      });
    });
  }
}
