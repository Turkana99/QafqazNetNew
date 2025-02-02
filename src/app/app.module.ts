import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MaterialModule } from './material.module';
import { ButtonModule } from 'primeng/button';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { BreadcrumbComponent } from './shared/breadcrumb/breadcrumb.component';
import { PaginatorModule } from 'primeng/paginator';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LanguageInterceptor } from './core/interceptors/language.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BreadcrumbComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    ButtonModule,
    PaginatorModule,
    HttpClientModule,
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    { provide: HTTP_INTERCEPTORS, useClass: LanguageInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
