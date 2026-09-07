import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-testimonials-component',
  imports: [CommonModule, CardModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './testimonials-component.html',
  styleUrl: './testimonials-component.scss',
})
export class TestimonialsComponent {
  testimonials = [
    {
      name: 'Ahmed K.',
      image: '/testimonials/user1.png',
      rating: 5,
      comment:
        'تعاملت مع المتجر أكثر من مرة وكانت تجربة ممتازة جدًا. الخدمة سريعة والأسعار مناسبة وأنصح الجميع بالتعامل معهم.',
    },
    {
      name: 'Mo7ammed',
      image: '/testimonials/user2.png',
      rating: 5,
      comment:
        'أسعار ممتازة ودعم سريع جدًا. أنصح الجميع بالتعامل معهم، وكانت تجربتي الأولى معهم أكثر من رائعة.',
    },
    {
      name: 'SARA',
      image: '/testimonials/user3.png',
      rating: 5,
      comment:
        'تجربة شراء ممتازة من البداية للنهاية. الطلب وصل بسرعة والخدمة كانت على مستوى عالي جدًا.',
    },
    {
      name: 'Mahmoud',
      image: '/testimonials/user4.png',
      rating: 5,
      comment:
        'من أفضل المتاجر التي تعاملت معها. المنتجات ممتازة والأسعار جيدة جدًا وخدمة العملاء محترمة.',
    },
    {
      name: 'Omar',
      image: '/testimonials/user5.png',
      rating: 4,
      comment: 'تجربة ممتازة وسهولة كبيرة في الطلب. بالتأكيد سأتعامل مع المتجر مرة أخرى.',
    },
    {
      name: 'Nour',
      image: '/testimonials/user6.png',
      rating: 5,
      comment: 'الخدمة سريعة جدًا والتعامل احترافي. أنصح بالتجربة وبالتأكيد سأكرر الشراء مرة أخرى.',
    },
    {
      name: 'Khaled',
      image: '/testimonials/user7.png',
      rating: 5,
      comment:
        'الأسعار ممتازة والدعم متعاون جدًا. تجربة مميزة وأنصح بها لأي شخص يبحث عن خدمة موثوقة.',
    },
    {
      name: 'Mona',
      image: '/testimonials/user8.png',
      rating: 5,
      comment: 'كل شيء كان واضحًا وسهلًا من لحظة الطلب حتى استلام المنتج. تجربة رائعة جدًا.',
    },
  ];
  getStars(rating: number): number[] {
    return Array(rating).fill(0);
  }
}


