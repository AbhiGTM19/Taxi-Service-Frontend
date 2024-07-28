import { Component } from '@angular/core';

@Component({
  selector: 'app-figma-test',
  templateUrl: './figma-test.component.html',
  styleUrls: ['./figma-test.component.css']
})
export class FigmaDesignPageComponent {

  bookARide() {
    window.location.href = 'https://forms.gle/wagu22L1PyL1NySP6';
  }

  feedback(){
    window.location.href = "https://www.google.com/maps/place/RV+Taxi+Services/@25.3760933,83.0185718,17z/data=!3m1!4b1!4m6!3m5!1s0x398e2f001ebd7a47:0x2f77133add222b87!8m2!3d25.3760885!4d83.0234427!16s%2Fg%2F11w5b0pl0_?entry=ttu"
  }

}
