import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public productlist : any;

  constructor(private api : ProductService) { }

  ngOnInit(): void {
    this.api.getProducts().subscribe(data => {
      this.productlist = data
    })
  }
}
