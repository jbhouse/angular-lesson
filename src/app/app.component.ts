import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  // styles: [".classname {color: red;}"]
})
export class AppComponent {
  title: string = 'app';
  something: number = 7;
}
