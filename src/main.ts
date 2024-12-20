import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { APP_ROUTES } from './app/app.routes';

import {
  PreloadAllModules,
  provideRouter,
  withDebugTracing,
  withPreloading,
  withRouterConfig,
} from '@angular/router';
bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(
      APP_ROUTES,
      withPreloading(PreloadAllModules),
      withDebugTracing()
    ),
  ],
});
