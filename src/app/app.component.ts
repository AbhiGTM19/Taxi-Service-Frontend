import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'RV_Taxi_Service_frontend';
  
  constructor(private router: Router) { }
    
  ngOnInit() {
      this.router.events.subscribe((event) => {
          if (!(event instanceof NavigationEnd)) {
              return;
          }
          window.scrollTo(0, 0)
      });
  }

}
