import { Component } from '@angular/core';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})
export class DirectoryComponent {
  isCond:boolean = true;
  isVal:boolean = true;

  cars:string[] = ["Mercedese","Nexon","Harrier","Safari","Rolce Roice"];

  country:string[] = ["India","Nepal","USA","Russia","Germany","Japan"];

  myChoice:string = "Safari";
} 
