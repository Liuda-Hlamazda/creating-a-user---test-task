import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { CreateProfileComponent } from './components/create-profile/create-profile.component';
import { ListOfUsersComponent } from './components/list-of-users/list-of-users.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MainRoutingModule } from './main-routing.module';



@NgModule({
  declarations: [
    MainComponent,
    CreateProfileComponent,
    ListOfUsersComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MainRoutingModule
  ]
})
export class MainModule { }
