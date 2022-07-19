import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Producto } from './producto.model';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private angularFirestore: AngularFirestore) { }

  getProductos(){
    return this.angularFirestore
    .collection("StockProductos")
    .snapshotChanges();
  }

  getProducto(id: string){
    return this.angularFirestore
        .collection("StockProductos")
        .doc(id)
        .valueChanges();
  }

  createProducto(producto: Producto){
    return new Promise<any>((resolve, reject) => {
      this.angularFirestore
          .collection("StockProductos")
          .add(producto)
          .then((response) => {
            console.log(response)
          }),
          (error: any) => {
            reject(error)
          }
    });
  }

  updateProducto(producto: Producto, id){
    return this.angularFirestore

    .collection("StockProductos")
    .doc(id)
    .update({
      descripcion: producto.descripcion,
      presentacion: producto.presentacion,
      precioDeCompra:	producto.precioDeCompra,
      stock: producto.stock,
      tratamiento: producto.tratamiento
    });

  }

  deleteProducto(producto: { id: string; }){
    return this.angularFirestore

      .collection("StockProductos")
      .doc(producto.id)
      .delete();
}

  }
  
