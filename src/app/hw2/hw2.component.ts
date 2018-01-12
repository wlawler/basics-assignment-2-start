import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hw2',
  templateUrl: './hw2.component.html',
  styleUrls: ['./hw2.component.css']
})
export class Hw2Component {
  userName= '';
  enableButton = false;

  constructor() { 
//    setTimeout(() => {
//      //this.userName = "true";
//      this.enableButton = true;
//    }, 
//    5000);
  }

  ngDoCheck() { 
//    console.log("Changes");
    if (this.userName.length > 0)
      this.enableButton = true;
    else this.enableButton = false;
  }
}