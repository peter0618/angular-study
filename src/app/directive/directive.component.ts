import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {
  a = 1;
  b = 2;
  str = 'no';
  myVar = 'B';

  choice = 1;

  color = 'green';

  fontSize = 0;
  cities = ['Miami', 'Sao Paulo', 'New York'];

  people = [
    { name: 'Peter', age: '35', city: 'Seoul' },
    { name: 'Grace', age: '33', city: 'New York' },
    { name: 'Joseph', age: '32', city: 'Tokyo' },
  ];

  peopleByCity = [
    {
      city: 'Miami',
      people: [
        { name: 'John', age: 12 },
        { name: 'Angel', age: 22 },
      ],
    },
    {
      city: 'Sao Paulo',
      people: [
        { name: 'Anderson', age: 35 },
        { name: 'Felipe', age: 36 },
      ],
    },
  ];

  content = '내용';

  ngOnInit(): void {
  }

  nextChoice() {
    const next = this.choice + 1;
    this.choice = next > 5 ? 1 : next;
  }

  apply(color: string, fontSize: number): void {
    this.color = color;
    this.fontSize = fontSize;
  }

}
