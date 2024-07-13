import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

    registerForm!: FormGroup;
    
    constructor(private fb: FormBuilder) {}
  
    ngOnInit(): void {
      this.registerForm = this.fb.group({
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        contactNumber: ['', [Validators.required]],
        address: ['', [Validators.required]],
        dob: ['', Validators.required],
        gender: ['', Validators.required],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required]
      }/* , { validator: this.passwordMatchValidator } */);
    }
  
    passwordMatchValidator(form: FormGroup) {
      const passwordControl = form.get('password');
      const confirmPasswordControl = form.get('confirmPassword');

      // Check if controls are defined and have values
      if (passwordControl && confirmPasswordControl &&
          passwordControl.value === confirmPasswordControl.value) {
        return console.log("Password Matched Successfully !!");  // Validation passes
      } else {
        return { mismatch: true };  // Validation fails
      }
    }
    
  
    onSubmit(): void {
      if (this.registerForm.valid) {
        this.passwordMatchValidator
        console.log('Form Submitted!', this.registerForm.value);
      }
    }
  }
