import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private authService: AngularFireAuth, private http: HttpClient) { }

  async login(email: string, password: string) {
    try {
      const datos = await this.authService.signInWithEmailAndPassword(email, password);
      const user = datos.user;
      if (user) {
        const token = await user.getIdToken();
        localStorage.setItem('userToken', token);
        localStorage.setItem('userEmail', user.email || '');
      }
      return datos;
    } catch (error) {
      throw error;
    }
  }

  getAuth() {
    return this.authService.authState.pipe(map(auth => auth));
  }

  async registrarse(email: string, password: string) {
    try {
      const datos = await this.authService.createUserWithEmailAndPassword(email, password);
      return datos;
    } catch (error) {
      throw error;
    }
  }

  logout() {
    console.log('Saliendo...');
    return this.authService.signOut();  
  }
}
