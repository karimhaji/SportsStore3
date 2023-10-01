import { Component } from '@angular/core';
import { Product } from "../model/product.model";
import { ProductRepository } from "../model/product.repository";



@Component({
  selector: 'sportstand',
  templateUrl: './sportstand.component.html',
  styleUrls: ['./sportstand.component.css']
})
export class SportstandComponent {
  constructor(private myrepository: ProductRepository)
  {

  }
  get SpecialProductsList():Product[]
  {
  return this.myrepository.getProducts("Category 2").filter(p=>p.name?.includes(" 1"));
  }
  get ProductsList():Product[]
  {
  return this.myrepository.getProducts("Category 2").filter(p=>p.price?.toString()!=null);
  }
}
