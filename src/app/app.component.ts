import { Component } from '@angular/core';
import { LoginService } from './login/login.service';

@Component({
  selector: 'mange-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'usermanagement';
  constructor(private loginService:LoginService){}
  logout(){
    return this.loginService.logOut();
  }
}
