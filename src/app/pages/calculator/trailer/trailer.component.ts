import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { CalculatorService } from '../../../service/calculator/calculator.service';

@Component({
  selector: 'app-trailer',
  templateUrl: './trailer.component.html',
  styleUrls: ['./trailer.component.css']
})
export class TrailerComponent implements OnInit {
  addTrailer:FormGroup;
  message:string='';
  imageSrc;
  tailers;
  submitted:boolean=false;
  constructor(private fb:FormBuilder,private _calculator:CalculatorService) { }

  ngOnInit() {
   this.createForm();
   this.getAllTrailers();
  }
  getAllTrailers = () =>this._calculator.getAllTrailers().subscribe(data=>{this.tailers=data; this.tailers= this.tailers.data})
  
  createForm = ()=>{
    this.addTrailer = this.fb.group({
      title:[''],
      noofcompart:['']
    })
  }
  openMyModal(event) {
    this.createForm();
    document.querySelector('#' + event).classList.add('md-show');
  }
  closeMyModal(event) {
    ((event.target.parentElement.parentElement).parentElement).classList.remove('md-show');
  }

  get f() {
    // console.log(this.registerForm.controls);
    return this.addTrailer.controls;
  }

  handleoshaIdFileInput = event => {
    const file = event && event.item(0);
    this.addTrailer.removeControl("trailerImage");
    this.addTrailer.addControl("trailerImage", new FormControl(file));

    const reader = new FileReader();
    reader.onload = e => (this.imageSrc = reader.result);
    reader.readAsDataURL(file);
  };


  addTrail = () =>{
    this._calculator.addTrailer(this.toFormData(this.addTrailer.value)).subscribe(data=>{
      // console.log(data);
      document.querySelector('#effect-13').classList.remove('md-show');
      this.getAllTrailers();
      this.showMessage(this.addTrailer.value.t_id?"Trailer Updated Successfully !!":"Trailer Added Successfully !!")
      this.addTrailer.reset();
      this.submitted = false;
    })
    // console.log((this.addTrailer))
  }
  editTrailer = (trailer)=>{
    this.openMyModal('effect-13');
    this.addTrailer = this.fb.group({
      title:[trailer.t_name],
      noofcompart:[trailer.t_noofcompart],
      id:[trailer.t_id]
    });
    this.imageSrc=trailer.t_image;
  }
  deleteTrailer = (trailer)=>{
    if(confirm('Do you really want to delete this record?'))
    {
      this._calculator.deleteTrailer(trailer.t_id).subscribe(data=>{
        this.getAllTrailers();
        this.showMessage("Record Deleted Successfully !!");
      })
    }
  }
  showMessage = message=>{this.message = message; setTimeout(()=>this.message='',2000) }

  toFormData<T>(formValue: T) {
    const formData = new FormData();
    for (const key of Object.keys(formValue)) {
      formData.append(key, formValue[key]);
    }
    return formData;
  }
}
