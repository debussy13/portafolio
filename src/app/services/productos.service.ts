import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Poroducto } from '../interfaces/producto.iterface';
import { resolve } from 'path';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  cargando = true;
  productos: Poroducto[] = [];
  productosFiltrados: Poroducto[] = [];
  constructor(private http: HttpClient) {
    this.cargarProductos();
  }
  private cargarProductos() {
    return new Promise((resolve, rejact) => {
      this.http.get('https://angular-html5.firebaseio.com/productos_idx.json')
      .subscribe((resp: Poroducto[]) => {
        this.productos = resp;
        this.cargando = false;
        resolve();
      });

    });
  }
  public getProducto(id: string) {
    return this.http.get(
      `https://angular-html5.firebaseio.com/productos/${id}.json`
    );
  }
  public buscarProducto( termino: string) {
    if (this.productos.length === 0 ) {
      this.cargarProductos().then(() => {
        this.filtrarProductos(termino);
      });
    } else {
      this.filtrarProductos(termino);
    }

  }
  private filtrarProductos(termino: string) {
    this.productosFiltrados = [];
    this.productos.forEach(produc => {
      if ( produc.categoria.toLowerCase().lastIndexOf(termino.toLowerCase()) >= 0 ||
           produc.titulo.toLowerCase().lastIndexOf(termino.toLowerCase()) >= 0) {
        this.productosFiltrados.push(produc);

      }
    });
  }
}
