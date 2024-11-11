import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { Router, CanActivate } from "@angular/router";
import { map, tap } from "rxjs/operators";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private auth: AngularFireAuth, private router: Router) {}

  canActivate(): Observable<boolean> {
    return this.auth.authState.pipe(
      map((user) => !!user), 
      tap((isLoggedIn) => {
        if (!isLoggedIn) {
          this.router.navigate(['/login']);
        }
      })
    );
  }
}
