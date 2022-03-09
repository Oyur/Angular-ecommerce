import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { ProductModel } from '../Model/product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  //apiurl
  apiURL = "https://localhost:5001/api/"

  //HttpHeader
  httpOptions = {
    headers : new HttpHeaders({
      'Content-Type': 'application/Json',
      'Accept': 'application/Json'
    })
  }

  //สร้างฟังชั่น getproduct
  getProducts() : Observable<ProductModel>{
    return this.http.get<ProductModel>(this.apiURL + 'Product')
  }

  //อ่านข้อมูล ProductbyID (methodGet)
  getProduct(data : number) : Observable<ProductModel>{
    return this.http.get<ProductModel>(this.apiURL + 'Product/' + data)
  }

  //เพิ่มสินค้าใหม่ (methodPost)
  createProduct(product:any) : Observable<ProductModel>{
    return this.http.post<ProductModel>(this.apiURL + 'Product',JSON.stringify(product),this.httpOptions)
  }
  
  //แก้ไขข้อมูลสินค้า (methodPut)
  updateProduct(product: any) : Observable<ProductModel>{
    return this.http.put<ProductModel>(this.apiURL+ 'Product/',JSON.stringify(product),this.httpOptions)
  }

  //ลบรายการสินค้า (methodDelete)
  deleteProduct(id: string){
    return this.http.delete<ProductModel>(this.apiURL + 'Product/' + id,this.httpOptions)
  }

}
