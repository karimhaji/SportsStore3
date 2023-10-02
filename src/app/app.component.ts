import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
 // templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //styles: ['h1 { font-weight: normal; }']
  template: "<router-outlet></router-outlet>"
})
export class AppComponent {
  title = 'SportsStore';
  
}
