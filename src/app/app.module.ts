import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { TestimonialsSectionComponent } from './components/testimonials-section/testimonials-section.component';
import { CoursesSectionComponent } from './components/courses-section/courses-section.component';
import { AppSectionComponent } from './components/app-section/app-section.component';
import { LinksSectionComponent } from './components/links-section/links-section.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeroSectionComponent,
    TestimonialsSectionComponent,
    CoursesSectionComponent,
    AppSectionComponent,
    LinksSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
