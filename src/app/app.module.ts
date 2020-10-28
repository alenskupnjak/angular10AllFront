'use strict';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MaterialModule } from './shared/material.module';

// za mobile frendly
import 'hammerjs';
import { AboutComponent } from './menu/about/about.component';
import { TopMenuComponent } from './menu/top-menu/top-menu.component';
import { FooterComponent } from './menu/footer/footer.component';

import { MatToolbarModule } from '@angular/material/toolbar';

// ROUTING
import { AppRoutingModule } from './router';

// MODULI
import { UniversitycourseModule } from './app-universitycourse/universitycourse.module';
import { InvoiceModule } from './app-invoice/invoice.module';
import { AuthModule } from './app-invoice/auth/auth.module';

// SERVISI
import { CoursesService } from './services/courses.service';
import { CourseResolver } from './services/course.resolver';
import { PageNotFoundComponent } from './menu/page-not-found/page-not-found.component';
// import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TokenInvoiceInterceptorService } from './app-invoice/services/token-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    TopMenuComponent,
    FooterComponent,
    PageNotFoundComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    UniversitycourseModule,
    InvoiceModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    MatToolbarModule,
    AuthModule,
  ],
  providers: [
    CoursesService,
    CourseResolver,
    // { provide: HTTP_INTERCEPTORS, useClass: TokenInvoiceInterceptorService, multi: true },
  ],
  bootstrap: [AppComponent],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
