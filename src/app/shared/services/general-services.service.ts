import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneralServicesService {
  
  products:any = [
    {pid:101,pname:"Laptop",pPrice:50000,company:"HP"},
    {pid:102,pname:"Printer",pPrice:30000,company:"HP"},
    {pid:103,pname:"Mouse",pPrice:2000,company:"Dell"},
    {pid:104,pname:"Keyword",pPrice:4000,company:"iBall"},
    {pid:105,pname:"Adapter",pPrice:5000,company:"Lenovo"},
  ]
  constructor() { }
}
