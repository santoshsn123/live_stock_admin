import { Component, OnInit, Input } from '@angular/core';
import { DashboardService } from '../../service/dashboard/dashboard.service';
import { CommonService } from '../../service/common/common.service';

@Component({
  selector: 'app-loads',
  templateUrl: './loads.component.html',
  styleUrls: ['./loads.component.css']
})
export class LoadsComponent implements OnInit {
  activeLoads:any;
  
  @Input() 
  set loadtypes(value) {
    this.getLatest10Loads(value);
  }
  constructor(private _dashboard:DashboardService,private _common:CommonService) {
    this.activeLoads=[];
  };

  ngOnInit() {
    
  }
  

  // getTabsData = () =>this._dashboard.getTabsData().subscribe(data=>{this.tabsData=data; console.log(data);})

  getLatest10Loads = (type) =>{
    this._dashboard.getLatest10Loads(type).subscribe(data=>{
    this.activeLoads=data; 
    this.activeLoads.map(load=>{
      load.initials = this._common.getInitials(load.u_fullname);
      load.showinitials = load.u_image.split("/")[load.u_image.split("/").length-1]=="default.png";
      return load;
    })
  })
}


}
