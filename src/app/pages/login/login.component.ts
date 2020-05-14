import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthorizationService } from '../../services/authorization.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  @Input() email = '';
  @Input() password = '';

  constructor(
    private router: Router,
    public authService: AuthorizationService
  ) {}

  ngOnInit(): void {}

  public login(): void {
    this.authService.logIn(this.email, this.password).subscribe(({ token }) => {
      sessionStorage.setItem('authToken', token);
      this.router.navigate(['/courses']);
    });
  }
}
