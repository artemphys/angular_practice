import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User, UserData } from 'src/app/interfaces';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements User {
  user: UserData;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.user = this.userService.getUser();
  }
}
