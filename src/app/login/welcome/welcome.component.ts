import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {

  slideOpts = {
    speed: 400
  };

  constructor(private router: Router) {

   }

  ngOnInit() {
    const animateButton = (e) => {

      e.preventDefault;
      // reset animation
      e.target.classList.remove('animate');

      e.target.classList.add('animate');
      setTimeout(() => {
        e.target.classList.remove('animate');
      }, 700);
    };

    const bubblyButtons = document.getElementsByClassName('bubbly-button');

    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < bubblyButtons.length; i++) {
      bubblyButtons[i].addEventListener('click', animateButton, false);
    }
  }

  goLogin() {
    setTimeout(() => {
      this.router.navigateByUrl('/login');
    }, 800);
  }

}
