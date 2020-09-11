import { Component, OnInit } from '@angular/core';
import {User} from '../user';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {
  userList=[];
  addUser(form){
    console.log(form.value);
    var user;
    user=form.value;
    this.userList.push(user);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
