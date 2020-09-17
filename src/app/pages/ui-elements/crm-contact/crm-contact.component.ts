import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import { AuthenticationService } from '../../../service/authentication/authentication.service';
import { CommonService } from '../../../service/common/common.service';

@Component({
  selector: 'app-crm-contact',
  templateUrl: './crm-contact.component.html',
  styleUrls: ['./crm-contact.component.css']
})
export class CrmContactComponent implements OnInit {
  public data: any;
  public rowsOnPage = 10;
  public filterQuery = '';
  public sortBy = '';
  public sortOrder = 'desc';

  constructor(public http: Http,private auth:AuthenticationService,private _common:CommonService) { }

  ngOnInit() {
  this.getAllusers();
  }

  getAllusers = ()=>{
    this.auth.getUsers().subscribe(data=>{
      this.data = data;
      this.data.map(dt=>{
        dt.showinitials = dt.u_image.split("/")[dt.u_image.split("/").length-1]=='default.png';
        dt.initials = this._common.getInitials(dt.u_fullname);
        return dt;
      });
    })
  }

  openMyModal(event) {
    document.querySelector('#' + event).classList.add('md-show');
  }

  closeMyModal(event) {
    ((event.target.parentElement.parentElement).parentElement).classList.remove('md-show');
  }
  deleteUser=(user)=>{
    if(confirm("Do you really want to delete this record?"))
    {
      this.auth.deleteUser(user.u_id).subscribe(data=>{
        this.getAllusers();
        alert("Record Deleted Successfully!!");
      })
    }
  }
}
