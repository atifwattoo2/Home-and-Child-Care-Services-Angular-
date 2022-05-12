import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public test:any=
    {
name:'ali',
adress:'qwe',
button:'abc'
  }

public test1:any=[

    {
      name:'ali',
      adress:'qwe',
      button:'abc'

    },

    {
      name:'atif',
      adress:'wattoo',
      button:'java'
    }

]
 

  constructor() {

   }

  ngOnInit(): void { 
   
  }
  

}
