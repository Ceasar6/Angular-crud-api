import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ProductService} from "../../services/product.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
addForm: FormGroup;
  constructor(private productService: ProductService,
              private fb: FormBuilder,
              private router: Router,
              private active: ActivatedRoute) { }

  ngOnInit(): void {
    this.addForm = this.fb.group({
      name: [''],
      price: [''],
      color: ['']
    });
  }

  addSubmit(){
    this.productService.add(this.addForm.value).subscribe(data=>{
      this.router.navigate(['products'])
    })
  }


}
