import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

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
    this.authService.getUserInfo().subscribe(
      (user) => {
        this.user = user;
      },
      (err: HttpErrorResponse) => {
        console.error(err.message);
      }
    );
  }

  public logOut(): void {
    this.authService.logOut();
    this.router.navigate(['/login']);
  }
}
