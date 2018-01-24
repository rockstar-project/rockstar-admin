import { Component, OnInit } from '@angular/core';
import { AuthService, fadeInAnimation } from './shared';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    animations: [ fadeInAnimation ]
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

    public getRouterOutletState(outlet) {
        return outlet.isActivated ? outlet.activatedRoute : '';
    }

}