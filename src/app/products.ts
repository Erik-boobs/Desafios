export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  images:string[];
}

export const products = [
  {
    id: 1,
    name: 'iPhone 11',
    price: 499,
    description: 'iPhone11 con 128GB de almacenamiento y 8GB de RAM',
    images: ['iphone11.jfif']
  },
  {
    id: 2,
    name: 'iPhone12',
    price: 599,
    description: 'iPhone12 con 128GB de almacenamiento y 8GB de RAM',
    images: ['iphone12.png']
  },
  {
    id: 3,
    name: 'Samsung Galaxy S22',
    price: 799,
    description: 'Samsung Galaxy S22 con 256GB de almacenamiento y 8GB de RAM',
    images: ['s22.jfif']
  },
  {
    id: 4,
    name: 'POCO X5 Pro',
    price: 599,
    description: 'Cuenta con 256GB de almacenamiento y 16GB de RAM',
    images: ['Xiaomi-Poco-X5-Pro-5G.jpg']
  },
  {
    id: 5,
    name: 'OnePlus 10 Pro',
    price: 499,
    description: 'Cuenta con 256GB de almacenamiento y 16GB de RAM',
    images: ['oneplus.png']
  },
  {
    id: 6,
    name: 'iPhone14 Pro',
    price: 999,
    description: 'iPhone 14 con 128GB de almacenamiento y 16GB de memoria RAM',
    images: ['iphone14.jfif']
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/