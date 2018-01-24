import { Component, OnInit } from '@angular/core';
import { AuthService, listAnimation } from './shared';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
     profile: any;

    constructor(public authService: AuthService) {
        authService.handleAuthentication();
    }

    ngOnInit() {
      if (this.authService.userProfile) {
        this.profile = this.authService.userProfile;
      }
  }

}