import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  constructor(private _router:Router){}
  logout(){
    if (window.confirm("Are You Sure to Logout")){
      sessionStorage.removeItem("user");
      this._router.navigate(['./login']);
    }
  }
}
