import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-angular-app';
  count: number = 0;
  incrementCount(): void {
    this.count += 1;
  }

  // THIS FUNCTION GETS CALLED ON A EVENT
  doSomething1(): void {
    alert();
  }

  // THIS FUNCTION GETS CALLED ON B EVENT
  doSomething2(): void {
    alert('2');
  }

  // THIS FUNCTION GETS CALLED ON C EVENT
  doSomething3(): void {
    alert('3');
  }

  // THIS FUNCTION GETS CALLED ON D EVENT
  doSomething4(): void {
    alert('4');
  }
}
