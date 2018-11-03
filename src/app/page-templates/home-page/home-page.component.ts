import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxImageGalleryComponent, GALLERY_IMAGE, GALLERY_CONF } from "ngx-image-gallery";
import { Globals } from '../../app.global'; 

declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

	address: any; tel: any; email: any; img_slider: any;

	masonryItems: any = [
    { full_img: 'https://images.pexels.com/photos/45775/pexels-photo-45775.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800&w=600', thumb_img: 'https://images.pexels.com/photos/45775/pexels-photo-45775.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150&w=137'},  
    { full_img: 'https://images.pexels.com/photos/45775/pexels-photo-45775.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800&w=600', thumb_img: 'https://images.pexels.com/photos/45775/pexels-photo-45775.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150&w=137'},  
    { full_img: 'https://images.pexels.com/photos/45775/pexels-photo-45775.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800&w=600', thumb_img: 'https://images.pexels.com/photos/45775/pexels-photo-45775.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150&w=137'},  
    { full_img: 'https://images.pexels.com/photos/45775/pexels-photo-45775.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800&w=600', thumb_img: 'https://images.pexels.com/photos/45775/pexels-photo-45775.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150&w=137'},  
    { full_img: 'https://images.pexels.com/photos/45775/pexels-photo-45775.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800&w=600', thumb_img: 'https://images.pexels.com/photos/45775/pexels-photo-45775.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150&w=137'},  
    { full_img: 'https://images.pexels.com/photos/45775/pexels-photo-45775.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800&w=600', thumb_img: 'https://images.pexels.com/photos/45775/pexels-photo-45775.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150&w=137'},  
    { full_img: 'https://images.pexels.com/photos/45775/pexels-photo-45775.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800&w=600', thumb_img: 'https://images.pexels.com/photos/45775/pexels-photo-45775.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150&w=137'},  
		{ full_img: 'https://images.pexels.com/photos/45775/pexels-photo-45775.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800&w=600', thumb_img: 'https://images.pexels.com/photos/45775/pexels-photo-45775.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150&w=137'},  
	];


  	constructor(private globals: Globals) { }

  	ngOnInit() {

  		this.address = this.globals.contact_details.address;
  		this.tel = this.globals.contact_details.tel;
  		this.email = this.globals.contact_details.email; 
      this.img_slider = this.globals.img_slider;

      this.globals.gsapAnimations();


  		$('.site-loader').css({'display': 'block'}); 
      $('.site-loader').fadeOut();



         

  	}  

}
