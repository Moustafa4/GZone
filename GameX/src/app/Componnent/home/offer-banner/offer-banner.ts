import { DecimalPipe } from '@angular/common';
import { Component, computed, input, signal } from '@angular/core';

@Component({
  selector: 'app-offer-banner',
  imports: [DecimalPipe],
  templateUrl: './offer-banner.html',
  styleUrl: './offer-banner.scss',
})
export class OfferBanner {

  private readonly defaultDate = '2026-08-20T23:59:59';

  readonly TargetDate = input<string>(this.defaultDate);

  private readonly now = signal(Date.now());
  private readonly remainingSeconds = computed(() => {
    const targetTime = new Date(this.TargetDate()).getTime();
    const difference = targetTime - this.now();

    return Math.max(0, Math.floor(difference / 1000));
  });
  private readonly timer = setInterval(() => {
    this.now.set(Date.now());
    if (this.remainingSeconds() <= 0) {
      clearInterval(this.timer);
    }
  });

  readonly days = computed(() => Math.floor(this.remainingSeconds() / 86400));
  readonly hours = computed(() => Math.floor((this.remainingSeconds() % 86400) / 3600));
  readonly minutes = computed(() => Math.floor((this.remainingSeconds() % 3600) / 60));
  readonly seconds = computed(() => Math.floor(this.remainingSeconds() % 60));

  ngOnDestroy(): void {
    clearInterval(this.timer);
  }
}
