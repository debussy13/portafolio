import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info.pagina.interface';
import { InfoEquipo } from '../interfaces/equipo.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {
  info: InfoPagina = {};
  equipo: InfoEquipo[] = [];
  cargada = false;
  constructor(private http: HttpClient) {
   this.cargarInfo();
   this.cargarEquipo();

  }
  private cargarInfo() {
    this.http.get('/assets/data/data.page.json')
    .subscribe(  (resp: InfoPagina) => {
      this.cargada = true;
      this.info = resp;
      // console.log(resp);
    });

  }
  private cargarEquipo() {
    this.http.get('https://angular-html5.firebaseio.com/equipo.json')
      .subscribe((resp: InfoEquipo[]) => {
       this.equipo = resp;
      // console.log(resp);
    });

  }
}
