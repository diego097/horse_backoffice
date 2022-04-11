import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router, CanActivate } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;

  constructor(
    private authService: AuthService,
    private modalService: NgbModal,
    private router: Router
  ) {
    this.email = '';
    this.password = '';
  }

  ngOnInit(): void {
  }

  async login() {
    try {
      console.log('estamos en el metodo login');
      let detail = new URLSearchParams();
      detail.append('accion', 'login');
      detail.append('usr', this.email);
      detail.append('pass', this.password);
      const data = await this.authService.login(detail);
      if (data) {
        console.log(data);
        this.authService.setUser({
          token: (data as any)[0].token,
          nombre: (data as any)[0].nombre,
        });
        const validate = await this.validateToken((data as any)[0]);
        const log = await this.sendLogData((data as any)[0]);
        console.log(log);
        console.log(validate);
        this.router.navigate(['/']);
      } else {
        alert('Credenciales incorectas');
        console.log('Credenciales incorectas....');
      }
    } catch (error) {
      console.log((error as any).message);
      alert('Ocurió un error vuelve a intentarlo');
    }
  }

  async validateToken(params: any) {
    let detail = new URLSearchParams();
    detail.append('accion', 'upd_tk');
    detail.append('token', params.token);
    detail.append('idus', params.id);
    detail.append('paso', params.paso);
    detail.append('server', params.server);

    const data = await this.authService.validateToken(detail);
    return (data as any)[0];
  }

  async sendLogData(params: any) {
    const str =
      "('titulo'=>'Login','contenido'=>'1028 correct username and password, welcome - nombre de usuario y contraseña correctos, bienvenido" +
      new Date() +
      '';
    console.log(str);
    let detail = new URLSearchParams();
    detail.append('accion', 'aud_ext');
    detail.append('token', params.token);
    detail.append('ope', str);
    detail.append('mod', 'login');

    const data = await this.authService.sendLogData(detail);
  }

}
