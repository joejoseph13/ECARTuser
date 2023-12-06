import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { userRegistration } from 'src/app/models/signup';
import { SignupService } from 'src/app/services/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;

  constructor(private fb: FormBuilder, private signupservice: SignupService) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.signupForm = this.fb.group({
      name: ['', Validators.required],
      phone: ['', [Validators.required, this.onlyNumbersValidator()]], // Add the custom validator
      address: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    }, { validators: this.passwordMatchValidator });
  }

  // Custom validator function to allow only numbers
  onlyNumbersValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const valid = /^\d+$/.test(control.value);
      return valid ? null : { onlyNumbers: true };
    };
  }

  passwordMatchValidator(form: FormGroup) {
    const passwordControl = form.get('password');
    const confirmPasswordControl = form.get('confirmPassword');

    if (passwordControl!.value !== confirmPasswordControl!.value) {
      confirmPasswordControl!.setErrors({ passwordMismatch: true });
    } else {
      confirmPasswordControl!.setErrors(null);
    }
  }

  onSubmit(data:userRegistration) {

    this.signupservice.userSignup(data).subscribe(
      response => {
        console.log('Signup successful!', response);
        alert("SIGNUP SUCCESSFUL");
        
        // Handle the successful response here
      }
   );
  
  }
}
