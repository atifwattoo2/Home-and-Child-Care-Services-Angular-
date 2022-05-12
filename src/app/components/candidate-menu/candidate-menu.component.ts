import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-candidate-menu',
  templateUrl: './candidate-menu.component.html',
  styleUrls: ['./candidate-menu.component.scss']
})
export class CandidateMenuComponent implements OnInit {

  public candidate_data: any=[
    {
      job_name:'Home Tutor Required',
      Name: 'Aiman Fatima',
      Country: 'Pakistan',
      State: 'Punjab',
      Age: '23-35 years old',
      Gender: 'Female',
      Experience: '2 Years Experience as a Home Tutor',
      SubjectSpecialist: 'Mathematics',
      LastUpdated: 'Last updated 3 mins ago'

    },

    {
      job_name:'Babysitter Required',
      Name: 'Kashaf Sulman',
      Country: 'Pakistan',
      State: 'Sindh',
      Age: '23-35 years old',
      Gender: 'Female',
      Experience: '2 Years Experience as a Babysitter',
      LastUpdated: 'Last updated 3 mins ago'
      

    },

    {
      job_name:'Maid Required',
      Name: 'Aqsa Riaz',
      Country: 'Pakistan',
      State: 'Punjab',
      Age: '23-35 years old',
      Gender: 'Female',
      Experience: '2 Years Experience as a Maid',
      LastUpdated: 'Last updated 3 mins ago'
      

    },
  ]



  constructor() { }

  ngOnInit(): void {
  }

}
