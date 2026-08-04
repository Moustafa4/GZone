export interface SubCategory {
  name: string;
  image: string;
  routerLink?: string; // اختياري لو عايز تربطها بـ route معين
}

export interface MegaMenuCategory {
  name: string;
  icon: string; // PrimeIcons class: pi pi-xxx
  subCategories: SubCategory[];
}
