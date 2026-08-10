import { Component } from '@angular/core';
import { Hero } from './hero/hero';
import { CategoriesSection } from './categories-section/categories-section';
import { HomeCarouselComponent } from './home-carousel-component/home-carousel-component';
import { OfferBanner } from "./offer-banner/offer-banner";
import { ServiceFeatures } from "./service-features/service-features";

@Component({
  selector: 'app-home',
  imports: [Hero, CategoriesSection, HomeCarouselComponent, OfferBanner, ServiceFeatures],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
