import { Injectable } from '@angular/core';
import { CommonService } from '../common/common.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DashboardService {

  constructor(private common:CommonService, private http:HttpClient) { }

  getTabsData = () =>{
    return this.http.get(this.common.baseUrl + "?action=getTabsData");
  }
  getLatest10Loads = (loadtype) =>{
    return this.http.get(this.common.baseUrl + "?action=getLatest10Loads&loadtype="+loadtype);
  }
}
