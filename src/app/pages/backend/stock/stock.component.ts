import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
import { HttpClient } from '@angular/common/http';
declare var $ : any;

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockComponent implements OnInit {

  constructor(public api:ProductService, private http: HttpClient) { }

    //สร้างตัวแปรรับค่าจาก api
    dataProduct : any = []

    dataProductId = {
      "productId" : "",
      "productName":"",
      "price":"",
      "quantity":"",
      "picture":"",
      "categoryName":""
    }
  
     //ตัวแปรกำหนดค่าบนฟอร์มเพิ่มสินค้า
     dataProductAdd = {
      "productName":"",
      "price":"",
      "quantity":"",
      "picture":"",
      "categoryId":"0",
      "categoryInfo": {
      "categoryId": 0,
      "categoryName": "string",
      "categoryStatus": 0
      },
      "categoryName":"",
    }
  
    //ตัวแปรกำหนดค่าบนฟอร์มแก้ไขสินค้า
    dataProductUpdate = {
      "productId":"",
      "productName":"",
      "price":"",
      "quantity":"",
      "picture":"",
      "categoryName": ""
    }
  
    //ตัวแปรลบค่าProduct
    dataDeleteProduct = {
      "productId":""
    }

  ngOnInit(): void {
    this.showProducts()
  }

  showProducts(){
    this.api.getProducts().subscribe((data: {}) => {
      this.dataProduct = data
    })
  }

  showdetail(id : number){
    this.api.getProduct(id).subscribe((data :{})=> {
      this.dataProduct = data
    })

  }

  AddNewProduct(){
    this.api.createProduct(this.dataProductAdd).subscribe((data : {}) => {
      alert('success');
      this.showProducts();
      $("#modalAdd").click();
    })
  }

  UpdateProduct(){
    this.api.updateProduct(this.dataProductUpdate).subscribe((data : {}) => {
      alert('Update Product Complete')
      this.showProducts();
      $("#modalUpdate").click();
    })
  }
  
  DeleteProduct(id : string){
    this.api.deleteProduct(id).subscribe((data :{})=> {
      alert('Delete Complete')
      this.showProducts();
      $("#modalDelete").click();
    })
  }


}
