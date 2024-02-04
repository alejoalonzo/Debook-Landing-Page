import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule, provideHttpClient, withFetch,  } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { importProvidersFrom } from '@angular/core';

import { provideAnimations } from '@angular/platform-browser/animations';
import { environment } from '../../environments/environment';





export const appConfig: ApplicationConfig = {


  providers: [

        // internationalization i18n
        TranslateModule.forRoot({
          defaultLanguage: 'es',
          loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
          }
        }).providers!,

    provideRouter(routes), 
    provideHttpClient(withFetch()),
    // HttpClientModule,
    // importProvidersFrom(HttpClientModule),
    provideClientHydration(), 
    provideAnimations(),//PrimeNG required, 
    
  ]
};

export function HttpLoaderFactory (http: HttpClient){
  const baseHref = environment.production ? environment.baseHref : '/';
  return new TranslateHttpLoader(http, `${baseHref}assets/i18n/`)
}
