import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalSerService } from 'src/app/shared/services/global-service.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  constructor(private _globalSer:GlobalSerService,private _route:Router){}
  getData(data:any){
    const empObj = {
      name:data.uname,
      post:data.upost,
      salary:data.usalary,
      address:data.uaddr
    }
    this._globalSer.addRecord("employee",empObj).subscribe(()=>{
      window.alert("Record Added Successfully")
      this._route.navigate(["/crud"]);
    })
  }
}
