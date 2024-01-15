import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule, provideHttpClient  } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { provideAnimations } from '@angular/platform-browser/animations';

export function HttpLoaderFactory (http: HttpClient){
  return new TranslateHttpLoader(http)
}


export const appConfig: ApplicationConfig = {


  providers: [provideRouter(routes), provideClientHydration(), 
    provideAnimations(),//PrimeNG required, 
    provideHttpClient(),

    // internationalization i18n
    HttpClientModule,
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
