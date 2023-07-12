import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Product } from './shopping/model/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  products: Product[] = [
    {
      name: 'Banana',
      description: 'ผลไม้',
      price: 40,
    },
    {
      name: 'Apple',
      description: 'ผลไม้',
      price: 20,
    },
    {
      name: 'Cherry',
      description: 'ผลไม้',
      price: 30,
    },
    {
      name: 'Pine Apple',
      description: 'ผลไม้',
      price: 40,
    },
  ];
  filterProduct: Product[] = this.products;
  constructor() {}
  ngOnInit(): void {}

  searchProduct(text: string) {
    this.filterProduct = this.products.filter((product) => {
      const productName = product.name.toLowerCase();
      const textSearch = text.toLowerCase();
      return productName.indexOf(textSearch) !== -1;
    });
  }
}
