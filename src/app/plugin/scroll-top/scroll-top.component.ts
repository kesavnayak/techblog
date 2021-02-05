import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-scroll-top',
  templateUrl: './scroll-top.component.html',
  styleUrls: ['./scroll-top.component.scss'],
})
export class ScrollTopComponent implements OnInit {

  constructor(@Inject(DOCUMENT) public document: Document) {
 }
  //@HostListener('scroll', [])
  onWindowScroll() {
    if (
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop > 100 ||
      document.body.getElementsByClassName("fixedHeight")[0].scrollTop > 100
    ) {
      document.getElementById('scrollTop').style.display="inline";
    } else if (
      document.documentElement.scrollTop ||
      document.body.scrollTop < 10 ||
      document.body.getElementsByClassName("fixedHeight")[0].scrollTop < 10
    ) {
      document.getElementById('scrollTop').style.display="none";
    }
  }
  scrollToTop() {
    (function smoothscroll() {
      var currentScroll =
        document.documentElement.scrollTop || document.body.scrollTop || document.body.getElementsByClassName("fixedHeight")[0].scrollTop;
      if (currentScroll > 0) {
        window.requestAnimationFrame(smoothscroll);
        window.scrollTo(0, currentScroll - currentScroll / 8);
        document.body.getElementsByClassName("fixedHeight")[0].scrollTo(0, currentScroll - currentScroll / 8);
      }
    })();
  }
  ngOnInit() {
    document.getElementById('scrollTop').style.display="none";
    window.addEventListener('scroll', this.onWindowScroll, true);
  }
}
