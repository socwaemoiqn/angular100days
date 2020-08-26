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
  constructor() { }

  ngOnInit(): void {
  }

  showAlert():void{
    alert('You are clicked!');
  }

}
