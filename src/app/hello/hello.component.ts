import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit{

    fullName: string;
    age: number;

    ngOnInit() {
      this.fullName = "Hello";
      this.age = 24;
    }
}
