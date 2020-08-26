import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  user:any = {
    name: 'Viet',
    age: 23
  };

  users:any = [{
    id: 1,
    name: 'Viet',
    age: 23,
    gender: "male"
  },{
    id: 2,
    name: 'Dong Choi',
    age: 15,
    gender: "female"
  },
  {
    id: 3,
    name: 'Tung Núi',
    age: 12,
    gender: "female"
  }];
  constructor() { }

  ngOnInit(): void {
  }

  showAlert():void{
    alert('You are clicked!');
  }

}
