import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductosService } from '../../productos.service';



@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {

public productoForm: FormGroup

  constructor(
    public productosService: ProductosService,
    public formBuilder: FormBuilder,
    public router: Router
  ) { 
    this.productoForm = this.formBuilder.group({
      descripcion:    [''],
      presentacion:   [''],
      precioDeCompra:	[''],
      stock:          [''],
      tratamiento:    [''] 
       })
  }

  onSubmit(){
    this.productosService.createProducto(this.productoForm.value)
    this.router.navigate([''])
  }

}
