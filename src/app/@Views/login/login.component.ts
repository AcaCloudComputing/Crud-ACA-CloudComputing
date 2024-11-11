import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginForm: FormGroup;
  openErrorModal: boolean = false;
  errorMessage: string = '';


  constructor(
    private router: Router,
    private loginService: LoginService,
    private fb: FormBuilder
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]], 
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  isLogin(email: string, password: string) {
    this.loginService.login(email, password).then((user) => {
      if (user) {
        this.router.navigate(['/Home']);
      }
    }).catch((error) => {
      this.openErrorModal = true; 
      this.errorMessage = 'Credenciales incorrectas. Intenta nuevamente.';
      console.log(error);  
    });
  }
  
  onSubmit() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      this.isLogin(email, password);
    } else {
      this.openErrorModal = true;  
      this.errorMessage = 'Asegúrate de haber ingresado correctamente tu correo electrónico y contraseña.';
      console.log(this.loginForm.value);  
    }
  }
  toggleErrorModal() {
    this.openErrorModal = !this.openErrorModal;
  }

  closeErrorModal() {
    this.openErrorModal = false;
  }
}
