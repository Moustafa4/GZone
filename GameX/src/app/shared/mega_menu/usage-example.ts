// ==== مثال 1: استخدام في الهيدر الرئيسي ====
// header.component.ts
// import { Component } from '@angular/core';
// import { MegaMenuComponent } from 'src/app/shared/components/mega-menu/mega-menu.component';
// import { MegaMenuCategory } from 'src/app/shared/components/mega-menu/mega-menu.model';

// @Component({
//   selector: 'app-header',
//   standalone: true,
//   imports: [MegaMenuComponent],
//   templateUrl: './header.component.html'
// })
// export class HeaderComponent {
//   mainCategories: MegaMenuCategory[] = [
//     {
//       name: 'PC Components',
//       icon: 'pi pi-cog',
//       subCategories: [
//         { name: 'Computer Case', image: 'assets/img/case.png' },
//         { name: 'Processors', image: 'assets/img/cpu.png' }
//       ]
//     }
//     // ... باقي الكاتيجوريز
//   ];

//   onSubCategoryClick(event: { category: MegaMenuCategory; sub: any }): void {
//     // مثلاً تعمل navigate للـ route بتاع الـ sub-category
//     console.log(event.category.name, event.sub.name);
//   }
// }

/* header.component.html
<app-mega-menu
  [categories]="mainCategories"
  buttonLabel="SHOP BY CATEGORIES"
  (subCategorySelected)="onSubCategoryClick($event)">
</app-mega-menu>
*/


// ==== مثال 2: نفس الكومبوننت بداتا مختلفة تماماً في صفحة تانية ====
// deals-page.component.ts
// @Component({
//   selector: 'app-deals-page',
//   standalone: true,
//   imports: [MegaMenuComponent],
//   template: `
//     <app-mega-menu
//       [categories]="dealsCategories"
//       buttonLabel="EXPLORE OFFERS">
//     </app-mega-menu>
//   `
// })
// export class DealsPageComponent {
//   dealsCategories: MegaMenuCategory[] = [
//     {
//       name: 'Flash Deals',
//       icon: 'pi pi-bolt',
//       subCategories: [
//         { name: 'Today Only', image: 'assets/img/flash.png' }
//       ]
//     }
//   ];
// }
