import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../services/product.service";
import {FormBuilder} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {IProduct} from "../../interfaces/iproduct";

@Component({
  selector: 'app-product-show',
  templateUrl: './product-show.component.html',
  styleUrls: ['./product-show.component.css']
})
export class ProductShowComponent implements OnInit {
product: IProduct;
  constructor(private productService: ProductService,
              private router: Router,
              private active: ActivatedRoute) { }
id = +this.active.snapshot.paramMap.get('id');
  ngOnInit(): void {
    this.productService.show(this.id).subscribe(data=>{
      console.log(data);
      this.product =data;
    })
  }

  delete(id)
  {
    console.log(id);
    if (confirm('asdasd'))
    this.productService.delete(id).subscribe(data=>{
      this.router.navigate(['products'])
    })
  }

}
