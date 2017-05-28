import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {

  names: Array<String> = ['ali',  'yassin' , 'karim' ];
  person =  {
    name : 'ali',
    style: 'red',
  }
  constructor() { }

  ngOnInit() {
  }

  changStyle = function (){
    this.person.style = 'green';
  };

}
