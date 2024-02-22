import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule, provideHttpClient  } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { provideAnimations } from '@angular/platform-browser/animations';
import { environment } from '../../environments/environment';

import { importProvidersFrom } from '@angular/core';


export function HttpLoaderFactory (http: HttpClient){
  const baseHref = environment.production ? environment.baseHref : '/';
  // removing baseHref so i18n path is always relative
  // return new TranslateHttpLoader(http, `${baseHref}assets/i18n/`);
  return new TranslateHttpLoader(http, `assets/i18n/`);
}


export const appConfig: ApplicationConfig = {


  providers: [
    provideRouter(routes), provideClientHydration(), 
    provideAnimations(),//PrimeNG required, 
    // provideHttpClient(),
    importProvidersFrom(HttpClientModule),

    // internationalization i18n
    
    // HttpClientModule,

    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }).providers!
  ]
};
