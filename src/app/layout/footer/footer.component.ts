import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})

export class FooterComponent {

  redirectToFacebook() {
    const fbURL = "https://www.facebook.com/profile.php?id=61562391380565"
    window.open(fbURL, "_blank")
  }

  redirectToInstagram() {
    const instaURL = "https://www.instagram.com/rvta.xi/"
    window.open(instaURL, "_blank")
  }

  redirectToWhatsapp() {
    const whatsappURL = "https://wa.me/919201709650"
    window.open(whatsappURL, "_blank")
  }

}
