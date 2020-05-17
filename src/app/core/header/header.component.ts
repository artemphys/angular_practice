import { Component, DoCheck, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthorizationService } from 'src/app/services/authorization.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, DoCheck {
  @Input() isAuthenticated = false;

  constructor(
    private router: Router,
    public authService: AuthorizationService
  ) {}

  ngOnInit(): void {
    this.checkAuth();
  }

  ngDoCheck(): void {
    this.checkAuth();
  }

  public checkAuth(): void {
    this.isAuthenticated = this.authService.isAuthenticated();
  }

  public goHome(): void {
    this.router.navigate([`/courses`]);
  }
}
