import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalSerService } from 'src/app/shared/services/global-service.service'; 

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {

  id:any;
  empObj:any;
  constructor(private _actRoute:ActivatedRoute,private _globalSer:GlobalSerService, private _router:Router){}

  ngOnInit(){
    this._actRoute.paramMap.subscribe((parms:any)=>{
      this.id = parms.get('id');
      console.log(this.id);
      this._globalSer.singleRecord("employee",this.id).subscribe((res)=>{
        this.empObj = {...res};
        // console.log(this.empObj);
      })
    })
  }

  getData(data:any){
    const empObj = {
      id:this.id,
      name:data.uname,
      post:data.upost,
      salary:data.usalary,
      address:data.uaddr
    }
    this._globalSer.updateRecord("employee",empObj).subscribe(()=>{
      window.alert("Record updated successfully");
      this._router.navigate(['/crud'])
    })
  }
}
