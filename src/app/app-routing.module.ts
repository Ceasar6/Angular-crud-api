import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductListComponent} from "./products/product-list/product-list.component";
import {ProductAddComponent} from "./products/product-add/product-add.component";
import {ProductEditComponent} from "./products/product-edit/product-edit.component";
import {ProductShowComponent} from "./products/product-show/product-show.component";

const routes: Routes = [
  {path: '', redirectTo:'products' ,pathMatch: 'full'},
  {path: 'products', component: ProductListComponent},
  {path: 'products/add', component: ProductAddComponent},
  {path: 'products/edit/:id', component: ProductEditComponent},
  {path: 'products/show/:id', component: ProductShowComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
