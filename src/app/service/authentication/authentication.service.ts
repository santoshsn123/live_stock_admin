import { Injectable } from '@angular/core';
import { CommonService } from '../common/common.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthenticationService {

  constructor(private http: HttpClient,private common:CommonService) { }
  checklogin = (data)=>{
    return this.http.post(this.common.baseUrl + "?action=adminlogin", data);
  }
  getUsers = ()=>{
    return this.http.get(this.common.baseUrl + "?action=getallusers");
  }
}
