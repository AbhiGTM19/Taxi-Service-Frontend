import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-figma-test',
  templateUrl: './figma-test.component.html',
  styleUrls: ['./figma-test.component.css']
})
export class FigmaDesignPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  bookARide() {
    window.location.href = 'https://forms.gle/wagu22L1PyL1NySP6';
  }

}
