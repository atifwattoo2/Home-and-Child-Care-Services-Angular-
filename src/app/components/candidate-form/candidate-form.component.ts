import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-candidate-form',
  templateUrl: './candidate-form.component.html',
  styleUrls: ['./candidate-form.component.scss']
})
export class CandidateFormComponent implements OnInit {

  public Save_and_Next: any={Email:'', Picture:'' , Address:'', Address2:'', City:'' ,State:'' , Zip: '', Experience:'' ,Age:'' , Gender:'' , Years_of_Education:'' , Language:'' , WeeklySalary:'' , Nationality:'' , Availability:'' , Hours:'' , Babysitter:'' , Maid:'' , Cook:'' , HomeTutor:'' , inputPassword:'' , inputConfermPassword:'' , TermsAndConditions:''}

  constructor(public router:Router) { }

  ngOnInit(): void {
  }

 
  process(){

    console.log(this.Save_and_Next)

  }

}
