import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  redirectToFacebook() {
    window.location.href = "https://www.facebook.com/profile.php?id=61562391380565"
  }

  redirectToInstagram() {
    window.location.href = "https://www.instagram.com/rvta.xi/"
  }


}
