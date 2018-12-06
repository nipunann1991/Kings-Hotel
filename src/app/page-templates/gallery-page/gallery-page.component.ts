import { Component, OnInit } from '@angular/core';
import { Globals } from '../../app.global'; 

declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-gallery-page',
  templateUrl: './gallery-page.component.html',
  styleUrls: ['./gallery-page.component.scss']
})
export class GalleryPageComponent implements OnInit {

  	constructor(private globals: Globals) { }

  	ngOnInit() {
  		$('.site-loader').css({'display': 'block'}); 
    	$('.site-loader').fadeOut();

      	this.globals.gsapAnimations(); 
  	}

}
