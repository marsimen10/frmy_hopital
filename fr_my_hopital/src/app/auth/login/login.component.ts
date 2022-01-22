import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {AuthServiceService} from '../../services/auth/auth-service.service';
import {LoginRequest} from '../../models/auth/LoginRequest.model';
import {JwtResponse} from '../../models/auth/JwtResponse.model';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],

})
export class NgxLoginComponent {
  user: any = {
    password: null,
    matricule: null,
  };
  loginRequest: LoginRequest;

  testAuth = false;
// tslint:disable-next-line:whitespace
  authFailed = false;

  constructor(
    private router: Router, private serviceAuth: AuthServiceService) {

  }

  login() {

    this.loginRequest = new LoginRequest(this.user.matricule, this.user.password);
    this.serviceAuth.login(this.loginRequest).subscribe(
      (data: JwtResponse) => {

        localStorage.setItem('token', data.token);
        localStorage.setItem('userFirstName', data.userFirstName);
        localStorage.setItem('userLastName', data.userLastName);
        localStorage.setItem('roles', JSON.stringify(data.roles));
        if (data.userPictureUrl != null && data.userPictureUrl !== '') {
          localStorage.setItem('picture', data.userPictureUrl);
        }
        this.router.navigateByUrl('/zen-people-referential');
// tslint:disable-next-line:whitespace
        this.testAuth = false;
      },
      (error) => {
        this.testAuth = true;
      },
    );
  }
}
