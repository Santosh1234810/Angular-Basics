import { Component } from '@angular/core';

@Component({
  selector: 'app-toggle-list',
  templateUrl: './toggle-list.component.html',
  styleUrls: ['./toggle-list.component.css']
})
export class ToggleListComponent {
  Bike:string[] = ["Kawasaki","Duke","Passion-pro","Shine","Bullet","BMW"];

  Car:string[] = ["Mercedese","Nexon","Safari","Thar","Mahidra-XUV700"];

  mix:string[] = ["Kawasaki","Duke","Passion-pro","Shine","Bullet","BMW","Mercedese","Nexon","Safari","Thar","Mahidra-XUV700"]

  isVal:boolean = true;
  myChoice:any;

  getCar(){
    this.isVal = true;
  }
  getBike(){
    this.isVal = false;
  }
  selectedItem(item:any){
    this.myChoice = item;
  }
}

