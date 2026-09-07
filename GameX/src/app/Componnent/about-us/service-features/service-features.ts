import { Component, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-service-features',
  imports: [],
  templateUrl: './service-features.html',
  styleUrl: './service-features.scss',
})
export class ServiceFeatures {
  CustomerNumber = signal(0);
  orderNumber = signal(0);
  targetcustomer = 50000;
  targetorder = 150000;
  steps = 100;
  increment = Math.ceil(this.targetcustomer / this.steps);
  incrementorder = Math.ceil(this.targetorder / this.steps);
  customeranimation: any = setInterval(() => {
    if (this.CustomerNumber() >= this.targetcustomer || this.orderNumber() >= this.targetorder) {
      this.CustomerNumber.set(this.targetcustomer);
      this.orderNumber.set(this.targetorder);
      clearInterval(this.customeranimation);
    } else {
      this.CustomerNumber.update((v) => v + this.increment);
      this.orderNumber.update((v) => v + this.incrementorder);
    }
  }, 5);
}
