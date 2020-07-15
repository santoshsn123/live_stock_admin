import { Component, OnInit } from '@angular/core';
import { CalculatorService } from '../../service/calculator/calculator.service';
import { FormGroup, FormBuilder, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-membership',
  templateUrl: './membership.component.html',
  styleUrls: ['./membership.component.css']
})
export class MembershipComponent implements OnInit {
  membership;
  memForm:FormGroup
  constructor(private _calculator:CalculatorService,private fb:FormBuilder) { }

  ngOnInit() {
    this.getMembership();
    this.memForm=this.fb.group({mem_data: this.fb.array([])});
  }
  getMembership = () =>this._calculator.getMembership().subscribe(data=>{this.membership=data;
    console.log(this.membership);
    this.generateForm();
  });
  generateForm = () =>{
    this.membership.forEach(element => {
      // this.memForm.addControl(`mem_free_${element.m_id}`, new FormControl(element.m_free));
      // this.memForm.addControl(`mem_premium_${element.m_id}`, new FormControl(element.m_premium));
      this.addnewMembership(element);
    });
    
  }
  get memPoints() {
    return this.memForm.get("mem_data") as FormArray;
  }

  addnewMembership = (element) => {
    this.memPoints.push(
      this.fb.group({
        m_free: [parseInt(element.m_free)],
        m_premium: [parseInt(element.m_premium)],
        m_title: [element.m_title],
        m_id: [element.m_id]
      })
    );
  };
  // 
  
  onSubmit=()=>{
    this._calculator.updateMembership(this.memForm.value.mem_data).subscribe(data=>{
      alert("Membership Updated Successfully!!");
    })
  }

  toFormData<T>(formValue: T) {
    const formData = new FormData();
    for (const key of Object.keys(formValue)) {
      formData.append(key, formValue[key]);
    }
    return formData;
  }

}
