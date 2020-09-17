import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../../service/authentication/authentication.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  token;
  userData;
  loadData;
  constructor(private route:ActivatedRoute,private _user:AuthenticationService) { 
    this.userData = [];
    this.route.params.subscribe(params => {
      this.token = params.token;
      console.log(this.token);
      this.getsingleUserdata(this.token);
      this.getload({token:this.token,limit:'all',filter:''});
    });
  }
  getload = (data) =>{
    this._user.getloads(data).subscribe(data=>{
      console.log('getloadsgetloadsgetloads :- ',data);
      this.loadData = data;
      this.loadData = this.loadData.data;
    });
  }
  getsingleUserdata=token=>{
    this._user.getsingleUser({token:token}).subscribe(data=>{
      this.userData=data; 
      this.userData=this.userData.data;
      console.log(this.userData);
    });
  }
  ngOnInit() {
    
  }

}
