import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup 
  openErrorModal: boolean = false;
  errorMessage: string = '';

  constructor(private router: Router, private loginService: LoginService,private fb: FormBuilder
  ) {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    })
   }

  onSubmit() {
    if (this.registerForm.valid) {
      const { email, password } = this.registerForm.value;
      this.loginService.registrarse(email, password).then((user) => {
        if (user) {
          this.router.navigate(['/Home']);
        }
      }).catch((error) => {
        this.openErrorModal = true; 
        this.errorMessage = 'El correo electrónica ya esta registrado. Intenta nuevamente.'; 
        console.log(error); 
      });
    } else {
      this.openErrorModal = true; 
      this.errorMessage = 'Por favor, completa todos los campos correctamente.'; 
    }
  }


  ngOnInit(): void { }


  closeErrorModal() {
    this.openErrorModal = false;
  }

}
