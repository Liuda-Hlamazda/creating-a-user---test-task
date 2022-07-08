import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'creating-a-user-test-task';

  name = new FormControl('', [Validators.required]);

  age = new FormControl('', [Validators.required]);

  email = new FormControl('', [Validators.email, Validators.required]);

  phone = new FormControl('', [Validators.required]);

  isBtnClicked = false;

  listOfUser: any[] = [];

  constructor() {}

  addUserToList() {
    if (
      this.name.status === 'VALID' &&
      this.age.status === 'VALID' &&
      this.email.status === 'VALID' &&
      this.phone.status === 'VALID'
    ) {
      let user = {
        name: this.name.value,
        age: this.age.value,
        email: this.email.value,
        phone: this.phone.value,
      };
      this.isBtnClicked = false;
      this.listOfUser.push(user);
    } else {
      this.isBtnClicked = true;
    }
  }
}
