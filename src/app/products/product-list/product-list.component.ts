import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../services/product.service";
import {IProduct} from "../../interfaces/iproduct";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: IProduct[] = [];

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.productService.getAll().subscribe(data => {
      // @ts-ignore
      this.products = data;
    })
  }
  delete(index){
    const product = this.products[index];
    if (confirm('asdasd'))
    this.productService.delete(product.id).subscribe(data =>{
      this.getAll();
    });

  }
}
