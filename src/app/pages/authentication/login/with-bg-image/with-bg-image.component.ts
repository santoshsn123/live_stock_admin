import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from '../../../../service/authentication/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-with-bg-image',
  templateUrl: './with-bg-image.component.html',
  styleUrls: ['./with-bg-image.component.css']
})
export class WithBgImageComponent implements OnInit {
  loginForm:FormGroup;
  submitted:boolean=false;
  userData;
  constructor(private fb:FormBuilder,private auth:AuthenticationService,private route:Router) {
    
    if(localStorage.getItem('login-session'))
    {
      route.navigate(['dashboard']);
    }
   }
  get f() {
    // console.log(this.registerForm.controls);
    return this.loginForm.controls;
  }
  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['',[Validators.required,Validators.email]],
      password: ['',Validators.required]
    });
  }

  submitHere = ()=>{
    this.submitted = true;
    // console.log(this.loginForm);
    
    if(this.loginForm.invalid)
    {
      return false;
    }
    this.auth.checklogin(this.loginForm.value).subscribe(data=>{
      this.userData=data;
      if(this.userData.status==200){
        localStorage.setItem('login-session',JSON.stringify(this.userData.data));
        this.route.navigate(['/dashboard/']);
      }
      else{
        alert(this.userData.message)
      }
      
      // this.route.navigate(['/dashboard/']);
    });
  }

}
