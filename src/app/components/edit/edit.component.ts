import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../productos.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from '../../producto.model';



@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  public editForm: FormGroup
  productoRef: any

  constructor(
    public  productoService: ProductosService,
    public  formBuilder: FormBuilder,
    private activateRoute: ActivatedRoute,
    private router: Router
  ) {
    this.editForm = this.formBuilder.group({
      descripcion:    [''],
      presentacion:   [''],
      precioDeCompra:	[''],
      stock:          [''],
      tratamiento:    [''] 
   });
  }

  ngOnInit(): void {
    const id = this.activateRoute.snapshot.paramMap.get('id')

    this.productoService.getProducto(id).subscribe(res => {
      this.productoRef = res
      this.editForm = this.formBuilder.group({
        descripcion:    [this.productoRef.descripcion],
        presentacion:   [this.productoRef.presentacion],
        precioDeCompra:	[this.productoRef.precioDeCompra],
        stock:          [this.productoRef.stock],
        tratamiento:    [this.productoRef.tratamiento] 
      })
    })
  }

  onSubmit(){
    const id = this.activateRoute.snapshot.paramMap.get('id')
    this.productoService.updateProducto(this.editForm.value, id)
    this.router.navigate([''])
  }
}
