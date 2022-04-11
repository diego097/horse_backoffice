import { Component, OnInit, ViewChild } from '@angular/core';
import { HippodromeService } from '../services/hippodrome.service';
import { AuthService } from '../services/auth.service';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],
})
export class ResultComponent implements OnInit {


  hipodromos: any;
  __hipodromos:any;
  user: any;
  fecha='';

  //filtrar los hipodromos por tipo
  caballos:any;
  galgos:any;
  carretas:any;

  constructor(
    private hippodromeService: HippodromeService,
    private authService: AuthService
  ) {}

  async ngOnInit() {
    this.user = [];
    this.caballos=[];
    this.galgos=[];
    this.carretas=[];

    this.getCurrentUser();
    await this.listAll();
  }

  async listAll() {

    const fecha = this.getCurrentDate();
    const detail = new URLSearchParams();
    detail.append('accion', 'lista_prem_hip_cab');
    detail.append('token', this.user.token);
    detail.append('fecha', fecha);

    const data = await this.hippodromeService.listAll(detail);
    this.hipodromos = data as any;
    this.__hipodromos = data as any;
    this.orderHippodromesByType();
    console.log(this.hipodromos);
    console.log(this.caballos);
    console.log(this.carretas);
    console.log(this.galgos);
  }

  search(){

  }

  listBy(params:any){
    if(params == 'horse') this.__hipodromos=this.caballos;
    if(params == 'galgo') this.__hipodromos=this.galgos;
    if(params == 'carreta') this.__hipodromos=this.carretas;
    if(params == 'all') this.__hipodromos=this.hipodromos;
  }

  orderHippodromesByType(){
    for (let i = 0; i < this.hipodromos.length; i++) {
      if(this.hipodromos[i].tipo == 1) this.caballos.push(this.hipodromos[i]);
      if(this.hipodromos[i].tipo == 2) this.carretas.push(this.hipodromos[i]);
      if(this.hipodromos[i].tipo == 3) this.galgos.push(this.hipodromos[i]);
    }
  }

  getCurrentUser() {
    this.user = this.authService.getCurrentUser();
  }

  getCurrentDate(){
    const date = new Date();
    const month = date.getMonth() < 10 ? '0' + (date.getMonth()+1) : (date.getMonth()+1);
    const day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    const year = date.getFullYear();
    const fecha = day + '/' + month + '/' + year;
    return fecha;
  }


}
