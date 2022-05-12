import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-client-confirmation',
  templateUrl: './client-confirmation.component.html',
  styleUrls: ['./client-confirmation.component.scss']
})
export class ClientConfirmationComponent implements OnInit {
  public data:any;
  
  public confirmation:any={ code:''};
        

  constructor(public router:Router) { }

  ngOnInit(){
    
    this.data=history.state.data;
     
     console.log(this.data)
    if(this.data.RegisterAs == 'Client'){
      console.log('client');
      this.router.navigate(['client-menu']);
    }
    else{
      console.log('canidate');
      this.router.navigate(['candidate-menu']);
    }
  }
  

}
