import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../service/dashboard/dashboard.service';
import { CommonService } from '../../service/common/common.service';

@Component({
  selector: 'app-loads-comman-page',
  templateUrl: './loads-comman-page.component.html',
  styleUrls: ['./loads-comman-page.component.css']
})
export class LoadsCommanPageComponent implements OnInit {

  data:any;
  
  constructor(private _dashboard:DashboardService,private _common:CommonService) {
    this.data=[];
  };

  ngOnInit() {
    this.getLatest10Loads();
  }
  

  // getTabsData = () =>this._dashboard.getTabsData().subscribe(data=>{this.tabsData=data; console.log(data);})

  getLatest10Loads = () =>{
    this._dashboard.getLatest10Loads('Completed').subscribe(data=>{
    this.data=data; 
    this.data.map(load=>{
      load.initials = this._common.getInitials(load.u_fullname);
      load.showinitials = load.u_image.split("/")[load.u_image.split("/").length-1]=="default.png";
      return load;
    });
    console.log(this.data);
  })
}

}
