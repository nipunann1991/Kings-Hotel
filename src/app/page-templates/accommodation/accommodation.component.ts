import { Component, OnInit } from '@angular/core';
import { Globals } from '../../app.global'; 

declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-accommodation',
  templateUrl: './accommodation.component.html',
  styleUrls: ['./accommodation.component.scss']
})
export class AccommodationComponent implements OnInit {

  constructor(private globals: Globals) { }

  ngOnInit() {
  		$('.site-loader').css({'display': 'block'}); 
    	$('.site-loader').fadeOut(); 

      	this.globals.gsapAnimations(); 
    	
  	}

}
