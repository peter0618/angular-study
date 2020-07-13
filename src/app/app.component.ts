import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  a = 1;
  b = 2;
  str = 'no';

  myVar = 'B';

  choice = 1;

  nextChoice() {
    const next = this.choice + 1;
    this.choice = next > 5 ? 1 : next;
  }
}
