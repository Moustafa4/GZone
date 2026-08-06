import { Component } from '@angular/core';
import { Hero } from './hero/hero';
import { CategoriesSection } from './categories-section/categories-section';
import { HomeCarouselComponent } from './home-carousel-component/home-carousel-component';

@Component({
  selector: 'app-home',
  imports: [Hero, CategoriesSection,  HomeCarouselComponent],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
