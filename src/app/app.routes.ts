import { Injectable } from '@angular/core';
import { Routes, CanActivate} from '@angular/router';

import { HomePageComponent } from './page-templates/home-page/home-page.component';
import { CommonPageComponent } from './page-templates/common-page/common-page.component';
import { AboutPageComponent } from './page-templates/about-page/about-page.component';
import { ContactPageComponent } from './page-templates/contact-page/contact-page.component';
import { AccommodationComponent } from './page-templates/accommodation/accommodation.component';
import { GalleryPageComponent } from './page-templates/gallery-page/gallery-page.component';


export const AppRoutes: Routes = [ 
	
	{ path: '', 
    	component: HomePageComponent,  
  },


  { path: 'accommodation', 
      component: AccommodationComponent,  
  },

	{ path: 'about-us', 
    	component: AboutPageComponent,  
  },

  { path: 'gallery', 
      component: GalleryPageComponent,  
  },

  { path: 'contact-us', 
      component: ContactPageComponent,  
  }, 

  { path: 'common', 
    	component: CommonPageComponent,  
  },

  
];