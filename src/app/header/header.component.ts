import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title: any;
  userLoggedIn: boolean = false;
  num1: number;
  num2: number;
  password: string;

  Menus = [];

  constructor() { }
  ngOnInit(): void { // Initally invoked
    this.title = "Calculator";
    this.Menus = ["Home", "Profile", "About"];
  }

  Logout() {
    console.log("Logged Out");
    this.userLoggedIn = false;
  }

  Login() {
    console.log("Logged In");
    this.userLoggedIn = true;
  }

  MenuClicked(menu){
    console.log("Navigate to", menu);
  }
  

}
