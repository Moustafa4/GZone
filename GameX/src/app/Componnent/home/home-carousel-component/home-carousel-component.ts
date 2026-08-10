import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
@Component({
  selector: 'app-home-carousel-component',
  imports: [CommonModule],
  standalone: true,

  templateUrl: './home-carousel-component.html',
  styleUrl: './home-carousel-component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeCarouselComponent {
  products = [
    {
      name: 'Phone',
      image: '/product/p1.png',
      price: '500',
      badge: 'جديد',
      description: 'losadsadskaldsadsakdjlsadsadsaiuodjksamdsaidjksaldmsadjknsm',
    },
    {
      name: 'Laptop',
      image: '/product/p1.png',
      price: 1200,
      badge: 'الأكثر مبيعاً',
      description: 'losadsadskaldsadsakdjlsadsadsaiuodjksamdsaidjksaldmsadjknsm',
    },
    {
      name: 'Laptop',
      image: '/product/p1.png',
      price: 1200,
      badge: 'الأكثر مبيعاً',
      description: 'losadsadskaldsadsakdjlsadsadsaiuodjksamdsaidjksaldmsadjknsm',
    },
    {
      name: 'Laptop',
      image: '/product/p1.png',
      price: 1200,
      badge: 'الأكثر مبيعاً',
      description: 'losadsadskaldsadsakdjlsadsadsaiuodjksamdsaidjksaldmsadjknsm',
    },
    {
      name: 'Laptop',
      image: '/product/p1.png',
      price: 1200,
      badge: 'الأكثر مبيعاً',
      description: 'losadsadskaldsadsakdjlsadsadsaiuodjksamdsaidjksaldmsadjknsm',
    },
    {
      name: 'Laptop',
      image: '/product/p1.png',
      price: 1200,
      badge: 'الأكثر مبيعاً',
      description: 'losadsadskaldsadsakdjlsadsadsaiuodjksamdsaidjksaldmsadjknsm',
    },
    {
      name: 'Laptop',
      image: '/product/p1.png',
      price: 1200,
      badge: 'الأكثر مبيعاً',
      description: 'losadsadskaldsadsakdjlsadsadsaiuodjksamdsaidjksaldmsadjknsm',
    },
    {
      name: 'Laptop',
      image: '/product/p1.png',
      price: 1200,
      badge: 'الأكثر مبيعاً',
      description: 'losadsadskaldsadsakdjlsadsadsaiuodjksamdsaidjksaldmsadjknsm',
    },
  ];
}
