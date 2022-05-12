import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  public sign_in:any={EmailNumber:'', password:'',login_as: ''}
  // router: any;


  constructor(public router:Router) { }

  ngOnInit(): void {

  }
  process() {
    console.log(this.sign_in)
    if (this.sign_in.login_as == 'Client') {
      console.log("client")

     this.router.navigate(['client-menu']);
      // this.router.process.any(['client-menu'])
      //this.sign_in.login_as.router.navigate.any(['home'])
      //document.getElementById('atif')
      //this.router.navigate.atif.any("client-menu")
      
    }
    else {
    console.log("worker")
     this.router.navigate(['candidate-menu'])
      
    }
  }

}
