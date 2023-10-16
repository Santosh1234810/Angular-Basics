import { Component } from '@angular/core';
import {regName,regPass,regEmail,regMobile} from 'src/app/shared/constant/constantData';
import {FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-rtf',
  templateUrl: './rtf.component.html',
  styleUrls: ['./rtf.component.css']
})
export class RtfComponent {
  frmGroup:any;

  ngOnInit(){
    this.frmGroup = new FormGroup({
      uname:new FormControl('',[Validators.required,Validators.pattern(regName)]),
      term:new FormControl('',[Validators.requiredTrue])
    })
  }
  getData(data:any){
    console.log(data);
    this.frmGroup.reset();
  }
}
