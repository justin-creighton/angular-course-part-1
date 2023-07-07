import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss']
})
export class ExampleComponent implements OnInit {
  // USE INPUT WHEN PASSING IN PROPS
  @Input() name: string = "";
  @Input() age: string = "";
  @Input() hairColor: string = "";

  constructor() {
  }

  ngOnInit(): void {

  }
}
