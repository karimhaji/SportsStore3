import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
 // templateUrl: './app.component.html',
 //styles: ['h1 { font-weight: normal; }']
  styleUrls: ['./app.component.css'],
  template: "<router-outlet></router-outlet>"
})
export class AppComponent {
  title = 'SportsStore';
  
}
/*
For some applications, being able to start using different URLs makes sense, but if that’s not the case,
then Angular supports route guards, which are used to govern the routing system.

To prevent the application from starting with the /cart or /order URL, I added a file called
storeFirst.guard.ts in the SportsStore/src/app folder and defined
*/