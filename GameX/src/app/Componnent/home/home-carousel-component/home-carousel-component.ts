import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
@Component({
  selector: 'app-home-carousel-component',
  imports: [],
  standalone: true,

  templateUrl: './home-carousel-component.html',
  styleUrl: './home-carousel-component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeCarouselComponent {
  products = [
    {
      name: 'Phone',
      image: 'assets/images/phone.png',
      price: 500,
      badge: 'جديد',
      description: 'losadsadskaldsadsakdjlsadsadsaiuodjksamdsaidjksaldmsadjknsm',
    },
    {
      name: 'Laptop',
      image: 'assets/images/laptop.png',
      price: 1200,
      badge: 'الأكثر مبيعاً',
      description: 'losadsadskaldsadsakdjlsadsadsaiuodjksamdsaidjksaldmsadjknsm',
    },
    {
      name: 'Laptop',
      image: 'assets/images/laptop.png',
      price: 1200,
      badge: 'الأكثر مبيعاً',
      description: 'losadsadskaldsadsakdjlsadsadsaiuodjksamdsaidjksaldmsadjknsm',
    },
    {
      name: 'Laptop',
      image: 'assets/images/laptop.png',
      price: 1200,
      badge: 'الأكثر مبيعاً',
      description: 'losadsadskaldsadsakdjlsadsadsaiuodjksamdsaidjksaldmsadjknsm',
    },
    {
      name: 'Laptop',
      image: 'assets/images/laptop.png',
      price: 1200,
      badge: 'الأكثر مبيعاً',
      description: 'losadsadskaldsadsakdjlsadsadsaiuodjksamdsaidjksaldmsadjknsm',
    },
    {
      name: 'Laptop',
      image: 'assets/images/laptop.png',
      price: 1200,
      badge: 'الأكثر مبيعاً',
      description: 'losadsadskaldsadsakdjlsadsadsaiuodjksamdsaidjksaldmsadjknsm',
    },
    {
      name: 'Laptop',
      image: 'assets/images/laptop.png',
      price: 1200,
      badge: 'الأكثر مبيعاً',
      description: 'losadsadskaldsadsakdjlsadsadsaiuodjksamdsaidjksaldmsadjknsm',
    },
    {
      name: 'Laptop',
      image: 'assets/images/laptop.png',
      price: 1200,
      badge: 'الأكثر مبيعاً',
      description: 'losadsadskaldsadsakdjlsadsadsaiuodjksamdsaidjksaldmsadjknsm',
    },
  ];
}
