import { Component, OnInit, signal } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { Plus } from '@primeicons/angular/plus';
import { ChevronDown } from '@primeicons/angular/chevron-down';
import { EllipsisV } from '@primeicons/angular/ellipsis-v';
import { Sidebar } from '@primeicons/angular/sidebar';
import { PIcon } from '@primeicons/angular/p-icon';
import { CommonModule } from '@angular/common';
interface NavItem {
  label: string;
  isActive?: boolean;
  badge?: string;
  subItems?: { label: string; isActive?: boolean; badge?: string }[];
}

interface NavGroup {
  label: string;
  action?: boolean;
  items: NavItem[];
}
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    CommonModule,
    AvatarModule,
    SidebarModule,
    ButtonModule,
    Plus,
    PIcon,
    Sidebar,
    EllipsisV,
    ChevronDown,
  ],
  templateUrl: './products.html',
  styleUrl: './products.scss',
})
export class Products {
  isMobile = signal(false);

  open = signal(true);

  private mql?: MediaQueryList;

  private mqlListener?: (e: MediaQueryListEvent) => void;

  navGroups: NavGroup[] = [
    {
      label: 'الأقسام',
      items: [
        { label: 'حسابات الألعاب', isActive: true },
        { label: 'شحن الألعاب', badge: '12' },
        { label: 'اشتراكات' },
        { label: 'لابتوب', badge: '3' },
        { label: 'PC', badge: '3' },
      ],
    },
    {
      label: 'نوع المنتجات',
      action: true,
      items: [
        {
          label: 'حسابات جاهزة',
          badge: '12',
        },
        { label: 'اشتراكات', badge: '16' },
        { label: 'Calendar', badge: '19' },
        {
          label: 'Documents',
          badge: '12',
        },
      ],
    },
    {
      label: 'Billing',
      items: [{ label: 'Payments' }, { label: 'Orders' }, { label: 'Subscriptions' }],
    },
  ];

  ngOnInit() {
    if (typeof window === 'undefined') return;
    this.mql = window.matchMedia('(max-width: 1023px)');
    this.isMobile.set(this.mql.matches);
    this.open.set(!this.mql.matches);
    this.mqlListener = (e) => {
      this.isMobile.set(e.matches);
      this.open.set(!e.matches);
    };
    this.mql.addEventListener('change', this.mqlListener);
  }

  ngOnDestroy() {
    this.mql?.removeEventListener('change', this.mqlListener!);
  }

  hasActiveSub(item: NavItem): boolean {
    return !!item.subItems?.some((s) => s.isActive);
  }
}
