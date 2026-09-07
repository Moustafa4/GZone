import { Component } from '@angular/core';
import { Hero } from "./hero/hero";
import { ServiceFeatures } from "./service-features/service-features";

@Component({
  selector: 'app-about-us',
  imports: [Hero, ServiceFeatures],
  templateUrl: './about-us.html',
  styleUrl: './about-us.scss',
})
export class AboutUs {

}
