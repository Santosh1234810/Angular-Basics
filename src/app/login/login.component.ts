import { Component } from '@angular/core';
import { GlobalSerService } from '../shared/services/global-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 
  userId:any;
  uPass:any;
  usersArray:any
  items:any
  constructor(private _globalSer:GlobalSerService,private _router:Router){}

  ngOnInit(){
    sessionStorage.removeItem("user");
  }
  getuserData(){
    // console.log(this.userId,this.uPass);
    this._globalSer.getRecord("users").subscribe((res)=>{
      this.usersArray = res;
      // console.log(this.usersArray);
      
      const data = this.usersArray.filter((items:any)=>{
        return items.uid===this.userId && items.upass===this.uPass})

      if (data.length > 0){
        this._globalSer.signIn(this.userId);
        this._router.navigate(['/crud'])
      }else{
        window.alert("Invalid Credentials")
        this.userId="";
        this.uPass="";
      }
    })
  }
}
