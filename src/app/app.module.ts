import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgxImageGalleryModule } from 'ngx-image-gallery';
import { NgMasonryGridModule } from 'ng-masonry-grid'; 
import { AppRoutes } from  "./app.routes";
import { Globals } from './app.global';

import { AppComponent } from './app.component';
import { HomePageComponent } from './page-templates/home-page/home-page.component';
import { CommonPageComponent } from './page-templates/common-page/common-page.component';
import { NavigationComponent } from './common-components/navigation/navigation.component';
import { FooterComponent } from './common-components/footer/footer.component';
import { AboutPageComponent } from './page-templates/about-page/about-page.component';
import { ContactPageComponent } from './page-templates/contact-page/contact-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CommonPageComponent,
    NavigationComponent,
    FooterComponent,
    AboutPageComponent, 
    ContactPageComponent
  ],
  imports: [
  	RouterModule.forRoot(AppRoutes, { useHash: false }),
    BrowserModule, NgMasonryGridModule
  ],
  providers: [Globals],
  bootstrap: [AppComponent]
})

export class AppModule { }
