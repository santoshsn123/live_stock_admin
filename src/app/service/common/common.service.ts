import { Injectable } from '@angular/core';

@Injectable()
export class CommonService {
  baseUrl:string="https://conveyenceoffice.livestockloader.com/api.php";
  // baseUrl:string="http://localhost/live_stock/api.php";
  constructor() { }
  getInitials = (fullname) =>{
    let array =fullname.split(' ');
    return (array.length>0?array[0][0]:'')+(array.length>1?array[array.length-1][0]:'');
  }
}
