import { Component } from '@angular/core';

@Component({
  selector: 'app-utdf',
  templateUrl: './utdf.component.html',
  styleUrls: ['./utdf.component.css']
})
export class UtdfComponent {
  getData(data:any){
    console.log(data);
  }
}
