import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { providePrimeNG } from 'primeng/config';

import { routes } from './app.routes';
import {
  provideClientHydration,
  withEventReplay,
  withNoIncrementalHydration,
} from '@angular/platform-browser';
import Aura from '@primeng/themes/aura';

export const appConfig: ApplicationConfig = {
  providers: [
    // provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    // provideClientHydration(withEventReplay(), withNoIncrementalHydration()),
    providePrimeNG({
      license:
        'eyJpZCI6ImY2MzBhNjJlLTZlMTUtNDYyYi1iZTk0LTcwMGRlZWZiZGY5OSIsInByb2R1Y3QiOiJwcmltZXVpIiwidGllciI6ImNvbW11bml0eSIsInR5cGUiOiJkZXYiLCJpYXQiOjE3ODUxNDg1NjgsImV4cCI6MTgxNjY4NDU2OH0.R71btZKUmWQPu2UkkUbd8Nf5qu5wxQ5jumRL-0nn4vw1ikW1o97hYZ0hEPxuPKkKUcoeHb_FvOvveEzfy_YnDQ',
      theme: {
        preset: Aura,
        options: {
          darkModeSelector: true,
          cssLayer: false,
        },
      },
    }),
  ],
};
