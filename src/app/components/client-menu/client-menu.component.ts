import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-menu',
  templateUrl: './client-menu.component.html',
  styleUrls: ['./client-menu.component.scss']
})
export class ClientMenuComponent implements OnInit {

 public test: any=[

    {
      job_name: 'Home Tutor',
      Name: 'Aimen Fatima',
      Country: 'Pakistan',
      State: 'Punjab',
      Age: '23',
      Gender: 'Female',
      Experience: '2 Years Experience as a Home Tutor',
      Subject_specialist: 'Mathematics',
      LastUpdated : 'Last Updated 3 mins ago'
    },

    {
      job_name: 'Babysitter',
      Name: 'Kinza Fatima',
      Country: 'Pakistan',
      State: 'Punjab',
      Age: '23',
      Gender: 'Female',
      Experience: '2 Years Experience as a Babysitter',
      LastUpdated : 'Last Updated 3 mins ago'
     


    },
    {
      job_name: 'Maid',
      Name: 'Kashaf Noor',
      Country: 'Pakistan',
      State: 'Punjab',
      Age: '28',
      Gender: 'Female',
      Experience: '2 Years Experience as a Maid',
      LastUpdated : 'Last Updated 3 mins ago'

    }

 ]
  
  
  constructor() { }

  ngOnInit(): void {
  }

}
