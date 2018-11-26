import { Component, OnInit } from '@angular/core';
import { Globals } from '../../app.global'; 

declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {

  	constructor(private globals: Globals) { }

  	ngOnInit() {
  		$('.site-loader').css({'display': 'block'}); 
    	$('.site-loader').fadeOut();

      	this.globals.gsapAnimations(); 
  	}

}
