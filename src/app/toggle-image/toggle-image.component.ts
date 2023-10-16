import { Component } from '@angular/core';

@Component({
  selector: 'app-toggle-image',
  templateUrl: './toggle-image.component.html',
  styleUrls: ['./toggle-image.component.css']
})
export class ToggleImageComponent {
  imgPath:string = "../../assets/cake-1.jpg";
  imgName:string = "Chocolate cake";
  isVal:boolean = false;

  getImage(){
    this.isVal = !this.isVal;
    // !this.isImage2 ; this.isImage2;
    if (this.isVal){
      this.imgPath = "../../assets/cake-1.jpg";
      this.imgName = "Chocolate cake";
    }
    else{
      this.imgPath = "../../assets/cake-2.jpg";
      this.imgName = "Mix Fruit cake";
    }
  }
 
}
