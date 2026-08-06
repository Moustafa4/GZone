import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { Crown } from '@primeicons/angular/crown';

@Component({
  selector: 'app-categories-section',
  imports: [CardModule],
  templateUrl: './categories-section.html',
  styleUrl: './categories-section.scss',
})
export class CategoriesSection {}
