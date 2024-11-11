import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  isOpen = false;
  isDropdownOpen = false;
  isLoggedIn = false;
  loggedInUser: string | null = null;


  constructor(private LoginService: LoginService, private router: Router) {}

  ngOnInit() {
    this.LoginService.getAuth().subscribe((auth) => {
      if (auth) {
        this.isLoggedIn = true;
        this.loggedInUser = auth.email;
      } else {
        this.isLoggedIn = false;
        this.loggedInUser = null;
      }
    });
  }

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }


  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  isLogout() {
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
    return this.LoginService.logout();
  }
}
