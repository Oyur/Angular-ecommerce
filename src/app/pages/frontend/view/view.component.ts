import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  

  //สร้างตัวแปรรับค่าจาก api
  dataProduct : any = []

  
  

  constructor(public api:ProductService) { }

  ngOnInit(): void {
    //this.api.getProduct().subscribe(data => {
      //this.dataProduct = data
  //})

  }

  //viewProduct(id:number){
    //this.api.getProduct(id).subscribe(data => {
      //this.dataProduct.productId = data.productId
    //})
  //}

}
