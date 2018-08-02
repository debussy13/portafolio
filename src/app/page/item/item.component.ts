import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';
import { ProductosService } from '../../services/productos.service';
import { ProductoDescripcion } from '../../interfaces/producto.descripcion.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  cargaProducto = true;
  producto: ProductoDescripcion;
  idProducto: String;
  constructor(private route: ActivatedRoute,
              public productosService: ProductosService  ) { }

  ngOnInit() {
    this.route.params.subscribe(prarametros => {
      this.productosService.getProducto(prarametros['id'])
        .subscribe ( (_producto: ProductoDescripcion) => {
            this.idProducto = prarametros['id'];
            this.producto = _producto;
            this.cargaProducto = false;
        });
    });

  }

}
