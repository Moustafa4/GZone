import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { MegaMenuCategory, SubCategory } from './mega-menu.model';

@Component({
  selector: 'app-mega-menu',
  standalone: true,
  imports: [CommonModule, ButtonModule, RippleModule],
  templateUrl: './mega-menu.component.html',
  styleUrls: ['./mega-menu.component.scss'],
})
export class MegaMenuComponent {
  // الداتا جاية من برا - كل مكان يستخدم الكومبوننت يبعت الـ categories بتاعته
  @Input({ required: true }) categories: MegaMenuCategory[] = [];

  // اختياري: تغيير نص الزرار حسب مكان الاستخدام
  @Input() buttonLabel = 'SHOP BY CATEGORIES';

  // اختياري: يطلع event لما حد يدوس على sub-category عشان الأب يتصرف (routing مثلاً)
  @Output() subCategorySelected = new EventEmitter<{
    category: MegaMenuCategory;
    sub: SubCategory;
  }>();

  activeCategory: MegaMenuCategory | null = null;
  isMenuOpen = false;

  openMenu(): void {
    this.isMenuOpen = true;
    if (!this.activeCategory) {
      this.activeCategory =
        this.categories.find((c) => c.subCategories.length) || this.categories[0] || null;
    }
  }

  showCategory(category: MegaMenuCategory): void {
    this.activeCategory = category;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }

  onSubClick(sub: SubCategory): void {
    if (this.activeCategory) {
      this.subCategorySelected.emit({ category: this.activeCategory, sub });
    }
  }
}
