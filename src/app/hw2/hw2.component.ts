import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hw2',
  templateUrl: './hw2.component.html',
  styleUrls: ['./hw2.component.css']
})
export class Hw2Component implements OnInit {
userName= '';
  constructor() { 
setTimeout(() => {}, 5000);
  this.userName = "true";
}
  ngOnInit() {
  }

}
