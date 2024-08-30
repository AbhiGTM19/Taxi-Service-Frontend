import { AfterViewInit, Component } from '@angular/core';
import ScrollReveal from 'scrollreveal';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements AfterViewInit {

  ngAfterViewInit() {

    // scroll animation code -->
    document.addEventListener('DOMContentLoaded', function () {

      ScrollReveal({
        distance: '60px',
        duration: 1000,
        delay: 300,
        opacity: 0,
        easing: "ease-in-out",
      });

      ScrollReveal().reveal('main .services-gif, main .amenities-gif', { origin: 'bottom', reset: true });

      ScrollReveal().reveal('main .man-with-phone-showing-thumbs-up, main .smiling-man-and-woman-with-phones')
        , { origin: 'bottom', reset: true }

      ScrollReveal().reveal('main .heading, main .text', { origin: 'bottom', reset: true });

      // ScrollReveal().reveal('main .h3', { origin: 'bottom', reset: true });

    });

  }

  // book a ride navigation button method -->
  bookARide() {
    //  add your code here...
  }

  // feedback/google map navigation button method -->
  feedback() {
    //  add your code here...
  }


}
