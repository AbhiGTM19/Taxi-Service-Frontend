import { Component } from '@angular/core';


@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css'],
})
export class FaqComponent {

  redirectToFacebook() {
    window.location.href = "https://www.facebook.com/profile.php?id=61562391380565"
  }

  redirectToInstagram() {
    window.location.href = "https://www.instagram.com/rvta.xi/"
  }


}
