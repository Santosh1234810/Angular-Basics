import { Component } from '@angular/core';

@Component({
  selector: 'app-mypipe',
  templateUrl: './mypipe.component.html',
  styleUrls: ['./mypipe.component.css']
})
export class MypipeComponent {
  msg:string="Welcome you all in Symbiosis Pune";
  emp:any = {id:101,name:"Vijay",post:"React Developer",salary:50000};
  d = new Date();

  employee:any=[
     {id:101,name:"Vijay",post:"React Developer",salary:50000,address:"Pune",gender:"Male"},
     {id:102,name:"Sanjay",post:"Angular Developer",salary:50000,address:"Mumbai",gender:"Male"},
     {id:103,name:"Sumedha",post:"IOS Developer",salary:550000,address:"Beed",gender:"Female"},
     {id:104,name:"Pooja",post:"Java Developer",salary:60000,address:"Latur",gender:"Female"},
     {id:105,name:"Alisha",post:"Python Developer",salary:55000,address:"Satara",gender:"Female"},
     {id:106,name:"Swapnil",post:"Relationship Manager",salary:55000,address:"Solapur",gender:"Male"}
  ]
}
