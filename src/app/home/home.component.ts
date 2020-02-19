import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  //API Response
  userData = {
    name: 'Yogi',
    role: 'Admin'
  }

  getCurrentTime = () => {
    return new Date();
  }

  constructor() { }

  ngOnInit() {
  }

}
