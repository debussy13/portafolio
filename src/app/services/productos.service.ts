import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Poroducto  } from '../interfaces/producto.iterface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  cargando = true;
  productos: Poroducto[] = [];
  constructor(private http: HttpClient) {
    this.cargarProductos();

   }
   private cargarProductos() {
     this.http.get('https://angular-html5.firebaseio.com/productos_idx.json')
     .subscribe( ( resp: Poroducto[] ) => {
        console.log(resp);
        this.productos = resp;
          this.cargando = false;
     } );
   }
}
