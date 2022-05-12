import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Home_and_Child_Care_Services';
 constructor(public router:Router){

 }
ngOnInit(): void {
  this.router.navigate(['home'])
}
}
