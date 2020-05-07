import { Component, OnInit } from '@angular/core';

import { User } from 'src/app/interfaces';
import { AuthorizationService } from 'src/app/services/authorization.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  user: User;

  constructor(
    private authService: AuthorizationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.user = this.authService.getUserInfo();
  }

  public logOut(): void {
    this.authService.logOut();
    console.log('Logged out');
    this.router.navigate(['/login']);
  }
}
