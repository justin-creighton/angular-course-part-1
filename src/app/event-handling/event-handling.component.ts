import { Component } from '@angular/core';

@Component({
  selector: 'app-event-handling',
  templateUrl: './event-handling.component.html',
  styleUrls: ['./event-handling.component.scss']
})
export class EventHandlingComponent {
  doSomething(val: string): void {
    alert(val);
  }

}
