import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router,CanActivate } from '@angular/router';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  public isLogged = false;

  constructor(private authService: AuthService, private router: Router){}
  ngOnInit() {
    this.checkUser();
  }

  checkUser(): void {  
    const user = this.authService.getCurrentUser(); 
    if(!user.token){
      this.isLogged=false;
  }
  else{
    this.isLogged=true;
    this.router.navigate(['/']);

  }
  }
}
