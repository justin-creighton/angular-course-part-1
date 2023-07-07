import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-counter-button',
  templateUrl: './counter-button.component.html',
  styleUrls: ['./counter-button.component.scss']
})
export class CounterButtonComponent implements OnInit, OnDestroy {
  @Input() count: number = 2;
  @Output() buttonClicked = new EventEmitter<void>();

  onClick(): void{
    this.buttonClicked.emit();
  }

  ngOnInit(): void {
    alert('init');
  }

  ngOnDestroy(): void {
    alert('destroy');
  }

 }
