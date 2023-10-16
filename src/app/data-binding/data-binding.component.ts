import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {
  msg:string = "Hello everyone, How are you all";
  imgPath:string = "../../assets/cake-1.jpg";
  imgName = "cake";
  items:any;

  greeting(data:any){
    window.alert(`Welcome You All In ${data}`);
  }

  company(data1:any){
    window.alert(`Welcome You All In ${data1}`);
  }

  getData(data2:any){
    console.log(`${data2}`)
  }
}
