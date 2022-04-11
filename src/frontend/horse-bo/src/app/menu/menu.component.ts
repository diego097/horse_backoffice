import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  isCollapsed = false;
  user: any;
  constructor(private authService: AuthService, private router: Router){}

  ngOnInit(){
  this.getCurrentUser();
  }

  getCurrentUser(){
    this.user = this.authService.getCurrentUser();
    console.log(this.user);
  }
  logOut(){
    this.authService.logoutUser();
    this.router.navigate(['/auth']);
  }
}
