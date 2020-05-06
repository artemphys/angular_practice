import { Component, Input, OnInit, DoCheck } from '@angular/core';
import { AuthorizationService } from './services/authorization.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, DoCheck {
  title = 'angular-practice';
  @Input() isAuthenticated = false;

  constructor(public authService: AuthorizationService) {}

  ngOnInit(): void {
    this.checkAuth();
  }

  ngDoCheck(): void {
    this.checkAuth();
  }

  public checkAuth(): void {
    this.isAuthenticated = this.authService.isAuthenticated();
  }
}
