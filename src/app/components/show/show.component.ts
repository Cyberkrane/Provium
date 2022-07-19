
import { Component, OnInit } from '@angular/core';
import { Producto } from '../../producto.model';
import { ProductosService } from '../../productos.service';


@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit {

  producto: Producto[]

  constructor(private productosService: ProductosService ) { }

  ngOnInit(): void {
    
    this.productosService.getProductos().subscribe((res) => {
      
      this.producto = res.map((e) => { 
        return{ 
          id: e.payload.doc.id, 
          ...(e.payload.doc.data() as Producto)
        };
    });
    });
  }

  deleteRow = (producto: {id:string}) => this.productosService.deleteProducto(producto);

}
