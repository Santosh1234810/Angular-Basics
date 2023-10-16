import { Component } from '@angular/core';
import { GeneralServicesService } from '../shared/services/general-services.service';

@Component({
  selector: 'app-service-data',
  templateUrl: './service-data.component.html',
  styleUrls: ['./service-data.component.css']
})
export class ServiceDataComponent {
  productDetail:any;
  constructor(private _generalSer:GeneralServicesService){}

  
  ngOnInit(){
    this.productDetail = this. _generalSer.products
    console.log(this.productDetail)
  }
}
