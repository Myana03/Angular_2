import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { counterReducer } from './ngrx/reducers/counter.reducers';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { todoReducer } from './ngrx/reducers/todo.reducers';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStore({ counterReducer,todoArr:todoReducer, }),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })
]
};
