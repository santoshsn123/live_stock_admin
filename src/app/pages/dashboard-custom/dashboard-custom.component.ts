import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../service/dashboard/dashboard.service';

@Component({
  selector: 'app-dashboard-custom',
  templateUrl: './dashboard-custom.component.html',
  styleUrls: ['./dashboard-custom.component.css']
})

export class DashboardCustomComponent implements OnInit {
  tabsData:any;
  // activeLoads:any;
  dataTitle:string;
  loadtype:string;
  constructor(private _dashboard:DashboardService) {
    this.tabsData = {users: 0, completed_loads: 0, active_loads: 0, users_trailers: 0};
   };

  ngOnInit() {
    this.getTabsData();
    this.fetchdata('activeloads', 'Active Loads');
  }
  fetchdata = (type,title) =>{
    this.loadtype=type;
    this.dataTitle = title;
  }
  getTabsData = () =>this._dashboard.getTabsData().subscribe(data=>{this.tabsData=data; console.log(data);})

}
