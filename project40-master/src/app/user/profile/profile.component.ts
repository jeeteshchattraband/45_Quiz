import { Component, OnInit } from '@angular/core';
import { UserAuthService } from '../user-auth.service';

// give proper path to UserAuthService as per your file sstructure.
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(public userAuth: UserAuthService) { }

  ngOnInit() {
  }

}
