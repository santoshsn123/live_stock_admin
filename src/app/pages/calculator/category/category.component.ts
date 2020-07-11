import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CalculatorService } from '../../../service/calculator/calculator.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  addCategory:FormGroup;
  submitted:boolean=false;
  category;
  message:string='';
  constructor(private fb:FormBuilder,private _calculator:CalculatorService) { }

  ngOnInit() {
    
    this.getAllCats();
    this.createForm();
  }
  createForm = ()=>{
    this.submitted = false;
    this.addCategory = this.fb.group({
      title:['',Validators.required]
    });
  }
  openMyModal(event) {
    this.createForm();
    document.querySelector('#' + event).classList.add('md-show');
  }

  get f() {
    // console.log(this.registerForm.controls);
    return this.addCategory.controls;
  }
  closeMyModal(event) {
    ((event.target.parentElement.parentElement).parentElement).classList.remove('md-show');
  }
  addCat = ()=>{
    this.submitted = true;
    if(this.addCategory.invalid) { return false; }
    console.log(this.addCategory.value);
    this._calculator.addCalculator(this.addCategory.value).subscribe(data=>{
          document.querySelector('#effect-13').classList.remove('md-show');
          this.getAllCats();
          this.showMessage(this.addCategory.value.cat_id?"Category Updated Successfully !!":"Category Added Successfully !!")
          this.addCategory.reset();
          this.submitted = false;
    })
  }
  getAllCats = () =>{
    this._calculator.getCalculatorCat().subscribe(data=>{
      this.category = data;
    })
  }
  editCategory=(cat)=>{
    document.querySelector('#effect-13').classList.add('md-show');
    this.addCategory = this.fb.group({
      title:[cat.title,Validators.required],
      cat_id:[cat.cat_id]
    });
  }
  deleteCategory = (cat)=>{
    if(confirm('Do you really want to delete this record?'))
    {
      this._calculator.deleteCategory(cat.cat_id).subscribe(data=>{
        this.getAllCats();
        this.showMessage("Record Deleted Successfully !!");
      })
    }
  }
  showMessage = message=>{this.message = message; setTimeout(()=>this.message='',2000) }
}
