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
    { full_img: '../../assets/images/room/IMG-20181129-WA0000.jpg', thumb_img: '../../assets/images/room/thumb/IMG-20181129-WA0000.jpg'},  
    { full_img: '../../assets/images/room/IMG-20181129-WA0004.jpg', thumb_img: '../../assets/images/room/thumb/IMG-20181129-WA0004.jpg'},     
    { full_img: '../../assets/images/room/IMG-20181129-WA0005.jpg', thumb_img: '../../assets/images/room/thumb/IMG-20181129-WA0005.jpg'},     
    { full_img: '../../assets/images/room/IMG-20181129-WA0007.jpg', thumb_img: '../../assets/images/room/thumb/IMG-20181129-WA0007.jpg'},     
    { full_img: '../../assets/images/room/IMG-20181129-WA0008.jpg', thumb_img: '../../assets/images/room/thumb/IMG-20181129-WA0008.jpg'},     
    { full_img: '../../assets/images/room/IMG-20181129-WA0008.jpg', thumb_img: '../../assets/images/room/thumb/IMG-20181129-WA0008.jpg'},     
    { full_img: '../../assets/images/room/IMG-20181129-WA0012.jpg', thumb_img: '../../assets/images/room/thumb/IMG-20181129-WA0012.jpg'},     
    { full_img: '../../assets/images/room/IMG-20181129-WA0011.jpg', thumb_img: '../../assets/images/room/thumb/IMG-20181129-WA0011.jpg'},     
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
