import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CalculatorService } from '../../../service/calculator/calculator.service';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css']
})
export class AnimalsComponent implements OnInit {
  addAnimals:FormGroup;
  cat;
  animals;
  message:string='';
  constructor(private fb:FormBuilder,private _calculator:CalculatorService) { }

  ngOnInit() {
    this.createForm();
    this.getAllCat();
    this.getAllAnimals();
  }
  getAllCat = () =>{
    this._calculator.getCalculatorCat().subscribe(data=>this.cat=data)
  }
  createForm = ()=>{
    this.addAnimals=this.fb.group({
      animalname:[''],
      minweight:[''],
      maxweight:[''],
      avgweight:[''],
      catid:['']
    })
  }
  editanimal=(a)=>{
    this.addAnimals=this.fb.group({
      animalname:[a.a_animal_name],
      minweight:[a.a_minweight],
      maxweight:[a.a_maxweight],
      avgweight:[a.a_avgweight],
      catid:[a.a_catid],
      a_id:[a.a_id]
    })
    this.openMyModal('effect-13');
  }
  openMyModal(event) {
    // this.createForm();
    document.querySelector('#' + event).classList.add('md-show');
  }

  get f() {
    // console.log(this.registerForm.controls);
    return this.addAnimals.controls;
  }
  closeMyModal(event) {
    ((event.target.parentElement.parentElement).parentElement).classList.remove('md-show');
  }
  getAllAnimals = () =>{
    this._calculator.getAnimals().subscribe(data=>{
      this.animals = data;
    })
  }
  addAnimal =()=>{
    console.log(this.addAnimals.value);
    this._calculator.createAnimal(this.addAnimals.value).subscribe(data=>{
      document.querySelector('#effect-13').classList.remove('md-show');
      this.getAllAnimals();
      this.showMessage(this.addAnimals.value.a_id?"Animal Updated Successfully !!":"Animal Added Successfully !!");
      this.addAnimals.reset();
    })
  }

  deleteanimal = (a)=>{
    if(confirm('Do you really want to delete this record?'))
    {
      this._calculator.deleteAnimal(a.a_id).subscribe(data=>{
        this.getAllAnimals();
        this.showMessage("Record Deleted Successfully !!");
      })
    }
  }

  showMessage = message=>{this.message = message; setTimeout(()=>this.message='',2000) }
}
