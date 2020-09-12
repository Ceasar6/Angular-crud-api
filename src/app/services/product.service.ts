import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IProduct} from "../interfaces/iproduct";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url = 'http://127.0.0.1:8000/api/products';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<IProduct> {
    return this.http.get<IProduct>(this.url);
  }

  delete(id): Observable<any> {
    return this.http.delete<any>(this.url + '/' + id);
  }

  edit(id, product): Observable<IProduct> {
    return this.http.put<IProduct>(this.url + '/' + id, product);
  }

  add(product): Observable<IProduct> {
    return this.http.post<IProduct>(this.url  ,product);
  }

  show(id): Observable<IProduct>{
    return this.http.get<IProduct>(this.url+ id);
  }


}
