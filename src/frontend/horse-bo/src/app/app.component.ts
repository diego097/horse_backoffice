import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router, CanActivate } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  constructor(private authService: AuthService, private route: Router){}
  public isLogged = false;

  ngOnInit() {
    this.checkUser();
  }

  checkUser(): void {   
    if (this.authService.getCurrentUser() == '{}') {
      this.route.navigate(['/auth']);
      this.isLogged = false;
    }
    else {

      //this.isLogged = true;
    }
  }
}
