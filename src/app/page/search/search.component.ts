import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private activeRoute: ActivatedRoute,
              public productosService: ProductosService) { }

  ngOnInit() {
    this.activeRoute.params.subscribe( params => {
      this.productosService.buscarProducto(params['termino']);
    });
  }

}
