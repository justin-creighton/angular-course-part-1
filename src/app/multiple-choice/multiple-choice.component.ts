import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-multiple-choice',
  templateUrl: './multiple-choice.component.html',
  styleUrls: ['./multiple-choice.component.scss'],
})
export class MultipleChoiceComponent {
  @Output() a = new EventEmitter<number>();
  @Output() b = new EventEmitter<void>();
  @Output() c = new EventEmitter<void>();
  @Output() d = new EventEmitter<void>();

  aClicked(): void {
    // WHEN THIS EVENT IS EMITTED IT WILL CALL THE FUNCTIONS LISTENING TO THESE EVENTS IN THE APP COMPONENT
    this.a.emit();
  }

  bClicked(): void {
    // WHEN THIS EVENT IS EMITTED IT WILL CALL THE FUNCTIONS LISTENING TO THESE EVENTS IN THE APP COMPONENT
    this.b.emit();
  }

  cClicked(): void {
    // WHEN THIS EVENT IS EMITTED IT WILL CALL THE FUNCTIONS LISTENING TO THESE EVENTS IN THE APP COMPONENT
    this.c.emit();
  }

  dClicked(): void {
    // WHEN THIS EVENT IS EMITTED IT WILL CALL THE FUNCTIONS LISTENING TO THESE EVENTS IN THE APP COMPONENT
    this.d.emit();
  }
}
