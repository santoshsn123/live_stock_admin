import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import { AuthenticationService } from '../../../service/authentication/authentication.service';

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

  constructor(public http: Http,private auth:AuthenticationService) { }

  ngOnInit() {
    this.auth.getUsers().subscribe(data=>{
    this.data = data;
    console.log("User Data here :- ",data);
  })
    // this.http.get(`assets/data/crm-contact.json`)
    //   .subscribe((data) => {
    //     this.data = data.json();
    //   });
  }

  openMyModal(event) {
    document.querySelector('#' + event).classList.add('md-show');
  }

  closeMyModal(event) {
    ((event.target.parentElement.parentElement).parentElement).classList.remove('md-show');
  }

}
