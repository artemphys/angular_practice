import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User, Login } from 'src/app/interfaces';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements Login {
  public user: User;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.user = this.userService.getUser();
  }
}
