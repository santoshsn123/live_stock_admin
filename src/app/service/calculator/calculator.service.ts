import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonService } from '../common/common.service';

@Injectable()
export class CalculatorService {

 
  constructor(private http: HttpClient,private common:CommonService) { }
  addCalculator = (data)=>{
    return this.http.post(this.common.baseUrl + "?action=addCalculatorCategory", data);
  }
  getCalculatorCat = ()=>{
    return this.http.get(this.common.baseUrl + "?action=getCalculatorCategory");
  }
  updateCalculatorCategory = (data)=>{
    return this.http.post(this.common.baseUrl + "?action=updateCalculatorCategory", data);
  }
  createAnimal = (data)=>{
    return this.http.post(this.common.baseUrl + "?action=createAnimal", data);
  }
  getAnimals = () =>{
    return this.http.get(this.common.baseUrl + "?action=getAllAnimals");
  }
  deleteAnimal=(id)=>{
    return this.http.post(this.common.baseUrl + "?action=deleteAnimal",id);
  }
  deleteCategory=id=>{
    return this.http.post(this.common.baseUrl + "?action=deleteCategory",id);
  }
  addTrailer = data=>{
    return this.http.post(this.common.baseUrl + "?action=addAdminTrailer",data);
  }
  getAllTrailers = () =>{
    return this.http.get(this.common.baseUrl + "?action=getAllTrailers");
  }
  deleteTrailer=id=>{
    return this.http.post(this.common.baseUrl + "?action=deleteTrailer",id);
  }
}
