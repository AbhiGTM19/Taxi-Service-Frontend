import { AfterViewInit, Component } from '@angular/core';
import ScrollReveal from 'scrollreveal';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements AfterViewInit {

  ngAfterViewInit() {

    document.addEventListener('DOMContentLoaded', function () {
      
      ScrollReveal({
        distance: '60px',
        duration: 1500,
        delay : 500,
        opacity : 0,
        easing : "ease-in-out",
      });

      ScrollReveal().reveal('main .services-gif, main .amenities-gif', { origin: 'bottom', reset:true });

      ScrollReveal().reveal('main .man-with-phone-showing-thumbs-up, main .smiling-man-and-woman-with-phones')
      , { origin: 'bottom', reset:true }

      ScrollReveal().reveal('main .heading, main .text', { origin: 'bottom', reset:true });

    });

  }

  bookARide() {
    const formURL = "https://forms.gle/wagu22L1PyL1NySP6"
    window.open(formURL, "_blank")
  }

  feedback() {
    const mapURL = "https://www.google.com/maps/place/RV+Taxi+Services/@25.3760933,83.0185718,17z/data=!3m1!4b1!4m6!3m5!1s0x398e2f001ebd7a47:0x2f77133add222b87!8m2!3d25.3760885!4d83.0234427!16s%2Fg%2F11w5b0pl0_?entry=ttu"
    window.open(mapURL, "_blank")
  }


}
