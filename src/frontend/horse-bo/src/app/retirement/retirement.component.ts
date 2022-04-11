import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { HippodromeService } from '../services/hippodrome.service';

@Component({
  selector: 'app-retirement',
  templateUrl: './retirement.component.html',
  styleUrls: ['./retirement.component.css'],
})
export class RetirementComponent implements OnInit {
  user: any;
  carrera: any;
  hipodromos: any;
  horsesByRace: any;

  //separamos a los hipodromos por tipo
  caballos = [];
  carretas = [];
  galgos = [];

  selectedHipName = '';
  selectedCarrNumber = '#';

  constructor(
    private authService: AuthService,
    private hipService: HippodromeService
  ) {}

  async ngOnInit() {
    this.user = [];
    this.hipodromos = [];
    this.horsesByRace = [];
    this.carrera = '';
    await this.listHipodromos();
  }

  async listHipodromos() {
    try {
      const token = this.getCurrentUserToken();
      const fecha = this.getCurrentDate();
      const detail = new URLSearchParams();
      detail.append('accion', 'carrera_dia');
      detail.append('token', token);
      detail.append('fecha', fecha);

      const data = await this.hipService.listCarreraPorDia(detail);
      this.hipodromos = data as any;
      console.log(this.hipodromos);
    } catch (error) {
      console.log("ocurrió un error", error);
      
    }
  }

  async listHorses(carrera: any, hip: any) {
    console.log(carrera);
    const token = this.getCurrentUserToken();
    const fecha = this.getCurrentDate();
    const detail = new URLSearchParams();
    detail.append('accion', 'caballos_dia');
    detail.append('token', token);
    detail.append('fecha', fecha);
    detail.append('idhip', hip.id);
    detail.append('ncarrera', carrera);

    const data = await this.hipService.listHorsesByHippodrome(detail);
    this.horsesByRace = data as any;
    this.selectedCarrNumber = carrera;
    this.selectedHipName = hip.nombre;
    console.log(data);
  }

  orderHippodromesByType() {
    for (let i = 0; i < this.hipodromos.length; i++) {}
  }

  getCurrentUserToken() {
    this.user = this.authService.getCurrentUser();
    return (this.user as any).token;
  }

  getCurrentDate() {
    const date = new Date();
    const month =
      date.getMonth() < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
    const day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    const year = date.getFullYear();
    const fecha = day + '/' + month + '/' + year;
    return fecha;
  }
}
