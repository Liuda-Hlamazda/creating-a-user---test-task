import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.scss']
})
export class CreateProfileComponent implements OnInit {
  form!: FormGroup;

  constructor(fb: FormBuilder, private userService: UsersService) {
    this.form = fb.group({
      name: ['', [Validators.required]],
      age: ['', [Validators.required]],
      email: ['', [Validators.email, Validators.required]],
      phone: ['', [Validators.required]],
    })
  }

  ngOnInit(): void {
  }

  addUserToList() {
    if (
      this.form.valid
    ) {
      this.userService.listOfUser.push(this.form.value)
      console.log(this.userService.listOfUser);
    }
  }
}
