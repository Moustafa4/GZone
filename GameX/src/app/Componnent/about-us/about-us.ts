import { Component } from '@angular/core';
import { Hero } from "./hero/hero";
import { ServiceFeatures } from "./service-features/service-features";
import { WhyUs } from "./why-us/why-us";
import { Warranty } from './warranty/warranty';

@Component({
  selector: 'app-about-us',
  imports: [Hero, ServiceFeatures, WhyUs, Warranty],
  templateUrl: './about-us.html',
  styleUrl: './about-us.scss',
})
export class AboutUs {

}
