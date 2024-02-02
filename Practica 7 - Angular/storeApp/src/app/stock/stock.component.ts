import { Component } from '@angular/core';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrl: './stock.component.css',
})
export class StockComponent {
  title = ' Stock';
  products: Product[] = [
    new Product('P01', 'HP Victus 16', 34, 1099.99),
    new Product('P02', 'Samsung Galaxy Z-flip 5 5G', 23, 699.99),
    new Product('P03', 'Samsung Galaxy buds', 56, 99.99),
    new Product('P04', 'GEFORCE RTX 4090TI', 5, 1999.99),
    new Product('P05', 'Razer Basilisk Mouse', 18, 64.99),
  ];

  product: Product = {
    code: '',
    description: '',
    quantity: 0,
    price: 0,
  };

  deleteProduct(product: Product): void {
    this.products.forEach((element, index) => {
      if (element === product) {
        this.products.splice(index, 1);
      }
    });
  }

  selectProduct(product: Product): void {
    this.product = { ...product };
  }

  addProduct(): void {
    if (this.product.code === '' || this.product.code === '0') {
      alert('The code cannot be empty or 0');
      return;
    }

    const existingProduct = this.products.find(
      (product) => product.code === this.product.code
    );

    if (existingProduct) {
      alert(
        'A product with such code already exists. Please try inserting new one (must be unique)'
      );
      return;
    }

    this.products.push({ ...this.product });

    // limpiar formulario
    this.product = {
      code: '',
      description: '',
      quantity: 0,
      price: 0,
    };
  }

  modifyProduct(): void {
    if (this.product.code === '') {
      alert('The Code cannot be empty');
      return;
    }

    const existingProductIndex = this.products.findIndex(
      (product) => product.code === this.product.code
    );

    if (existingProductIndex === -1) {
      alert('A product with sush code already exists');
      return;
    }

    this.products[existingProductIndex] = { ...this.product };
    alert(`Product has been modified. Code: ${this.product.code}`);

    this.product = {
      code: '',
      description: '',
      quantity: 0,
      price: 0,
    };
  }
}
