import { Component } from '@angular/core';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss'],
})
export class PeopleListComponent {
  showList: boolean = true;
  people = [
    {
      name: 'John',
      age: 34,
      hairColor: 'black',
    },
    {
      name: 'Sarah',
      age: 18,
      hairColor: 'red',
    },
    {
      name: 'Jeff',
      age: 22,
      hairColor: 'blond',
    },
  ];

  constructor() {}
}
