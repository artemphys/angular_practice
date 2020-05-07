import { Component, Input, OnInit } from '@angular/core';
import { userData } from 'src/mocks/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  @Input() email = '';
  @Input() password = '';

  constructor(private router: Router) {}

  ngOnInit(): void {}

  public login(): void {
    sessionStorage.setItem('user', JSON.stringify(userData));
    this.router.navigate(['/courses']);
    console.log('Logged In successfully!');
  }
}
