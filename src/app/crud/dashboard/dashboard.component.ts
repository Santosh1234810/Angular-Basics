import { Component,TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { GlobalSerService } from 'src/app/shared/services/global-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  emp:any;
  p:number = 1;
  term:any;
  modalRef?: BsModalRef
  constructor (private _globalSer:GlobalSerService, private modalService: BsModalService){}

  ngOnInit(){
    this.fetchData();
  }
  openModal(template: TemplateRef<any>){
    this.modalRef = this.modalService.show(template);
  }
  fetchData(){
    this._globalSer.getRecord("employee").subscribe((res:any)=>{
      this.emp = res;
      // console.log(this.emp);

    })
  }
  getId(id:any){
    // console.log(id);
    if(confirm(`Are you sure to delete record of id: ${id}`))
    {
      this._globalSer.deleteRecord("employee",id).subscribe(()=>{
        window.alert("Record Deleted Successfully");
        this.fetchData();
    })
  }
}
}
