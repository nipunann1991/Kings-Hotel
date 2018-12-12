import { Component, OnInit } from '@angular/core';
import { Globals } from '../../app.global'; 

import { HttpClientModule, HttpClient, HttpParams, HttpHeaders } from '@angular/common/http'; 
import { Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';


declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {

	form: FormGroup; 

  	constructor(private formBuilder: FormBuilder, private router: Router, private globals: Globals, private http: HttpClient) { }

  	ngOnInit() {
  		$('.site-loader').css({'display': 'block'}); 
    	$('.site-loader').fadeOut();

    	$('.close').click(function(){
    		$(this).parent().addClass('d-none')
    	})


    	this.form = this.formBuilder.group({

	      Firstname: [null, [Validators.required]],  
	      Lastname: [null, [Validators.required]],  
	      message: [null, [Validators.required]],
	      email:  [null, [Validators.required, Validators.email]],
	      need: [null, [Validators.required]]
	      
	    });

      	this.globals.gsapAnimations(); 
  	}

  	isFieldValid(field: string) { 
	 	return !this.form.get(field).valid && this.form.get(field).touched;
	}

	

  	contactForm(){
 
  		if (this.form.status == 'VALID') {
  			$('form#contact-form').addClass('loading');

  			const params = new HttpParams({
		       fromObject : this.form.value
		    });

		    let promise = new Promise((resolve, reject) => {

		        let apiURL =  "http://kingsnuwaraeliya.com/kings-hotel/contact.php";
		        this.http.post(apiURL, params)
		          .toPromise()
		          .then(
		          res => { 

		            let data : any = res;
		            console.log(data);  

  					$('form#contact-form').removeClass('loading');

  					this.form = this.formBuilder.group({

				      Firstname: '',  
				      Lastname:  '',  
				      message:  '',
				      email:   '',
				      need:  ''
				      
				    });


				    $('.success-msg').removeClass('d-none');

		            
		          	resolve();

			    }); 

			});

			return promise; 
	  		
  			 
  		}else{  

  			 
  			$('.error-msg').removeClass('d-none');
  		} 
  	
  	}

}
