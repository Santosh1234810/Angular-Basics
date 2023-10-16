import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalSerService {

  baseUrl:string="http://localhost:3000"
  constructor(private _http:HttpClient) { }

  getRecord(tableName:any){
    const url = `${this.baseUrl}/${tableName}`
    return this._http.get(url)
  }

  // delete request
  deleteRecord(tableName:any,id:any){
    const url= `${this.baseUrl}/${tableName}/${id}`
    return this._http.delete(url);
  }
  // post request
  addRecord(tableName:any, emp:any){
    const url = `${this.baseUrl}/${tableName}`
    return this._http.post(url,emp);
  }

  // get single record
  singleRecord(tableName:any,id:any){
    const url = `${this.baseUrl}/${tableName}/${id}`
    return this._http.get(url);
  }

  // update record
  updateRecord(tableName:any,data:any){
    const url = `${this.baseUrl}/${tableName}/${data.id}`
    return this._http.put(url,data);
  }

  signIn(currentuser:any){
    sessionStorage.setItem("user",currentuser);
  }
  signOut(){
    sessionStorage.removeItem("user");
  }
}
