import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ProductService} from "../../services/product.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  editForm: FormGroup;
  product;

  constructor(private productService: ProductService,
              private fb: FormBuilder,
              private router: Router,
              private active: ActivatedRoute) {
  }

  id = +this.active.snapshot.paramMap.get('id');

  ngOnInit(): void {
    this.editForm = this.fb.group({
      name: [''],
      price: [''],
      color: ['']
    });
    this.productService.show(this.id).subscribe(data=>{
      this.product = data;
      this.editForm.patchValue(this.product);
    })
  }

  editSubmit() {
    this.productService.edit(this.id, this.editForm.value).subscribe(data=>{
      this.router.navigate(['products']);
    })
  }

}
