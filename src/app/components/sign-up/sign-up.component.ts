import { state } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  public sign_up:any={FirstName:'', LastName:'', MobileNumber:'', RegisterAs:''}
  public selector:any=[{option:'Client'},{option:'Candidate'}]
  constructor(public router:Router) { }

  ngOnInit(): void {
  }

  process() {
    console.log(this.sign_up)
    if (this.sign_up.RegisterAs == 'Client') {
      console.log("client")

     this.router.navigate(['client-form']);
      // this.router.process.any(['client-menu'])
      //this.sign_in.login_as.router.navigate.any(['home'])
      //document.getElementById('atif')
      //this.router.navigate.atif.any("client-menu")
      
    }
    else {
    console.log("worker")
     this.router.navigate(['candidate-form'], {state: {Data: this.sign_up}})
      
    }
  }

  // process(){

  //   console.log(this.sign_up)
    
  //   this.router.navigate(['candidate-form'], {state : {data: this.sign_up }});
  // }
}
