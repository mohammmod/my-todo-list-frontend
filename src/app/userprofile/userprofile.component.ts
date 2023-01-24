import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.scss']
})
export class UserprofileComponent implements OnInit {

  longText:string='test test test test test';
  title:string='Dude'


  tasks: any[] = [
    {
      status: 'complete',
      number: 20,
    },
    {
      status: 'in progress',
      number: 10,
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

  alertme(){
    console.log('we will be clicked');
  }

}
