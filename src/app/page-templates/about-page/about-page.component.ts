import { Component, OnInit } from '@angular/core';
import { Globals } from '../../app.global'; 

declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit {

  	constructor(private globals: Globals) { }

  	ngOnInit() {
  		$('.site-loader').css({'display': 'block'}); 
    	$('.site-loader').fadeOut();

      	this.globals.gsapAnimations(); 
  	}

}
