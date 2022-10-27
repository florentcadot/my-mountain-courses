import { Component } from '@angular/core';

@Component({
  selector: 'mountain-routes-history-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'front';
  message= 'Heyyyy';

  changeMessage() {
    this.message = `NEw message ${Math.random()}`
  }
}
