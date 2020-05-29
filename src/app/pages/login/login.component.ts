import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthorizationService } from '../../services/authorization.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public hasError: boolean = false;
  email = '';
  password = '';

  constructor(
    private router: Router,
    public authService: AuthorizationService
  ) {}

  ngOnInit(): void {}

  public onFormSubmit(form): void {
    if (form.invalid) {
      this.hasError = true;
      return;
    }

    this.hasError = false;
    this.authService.logIn(this.email, this.password).subscribe(
      ({ token }) => {
        sessionStorage.setItem('authToken', token);
        this.router.navigate(['/courses']);
      },
      () => {
        this.hasError = true;
      }
    );
  }
}
