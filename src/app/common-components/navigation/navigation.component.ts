import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient, HttpParams, HttpHeaders } from '@angular/common/http'; 
import { FormGroup, FormBuilder, Validators,  FormControl } from '@angular/forms';
import { Globals } from '../../app.global';

declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

	form: FormGroup;
	address: any; tel: any; email: any; 

 	constructor(private globals: Globals, private formBuilder: FormBuilder, private http: HttpClient) { }

  	ngOnInit() {

  		this.address = this.globals.contact_details.address;
  		this.tel = this.globals.contact_details.tel;
  		this.email = this.globals.contact_details.email;


  		this.form = this.formBuilder.group({ 
	      firstname: [null, [Validators.required]],  
	      lastname: [null, [Validators.required]],  
	      checkin: [null, [Validators.required]],
	      checkout: [null, [Validators.required]],
	      no_of_guset: [null, [Validators.required]],
	      email:  [null, [Validators.required, Validators.email]],
	      note: [null, [Validators.required]]
	      
	    });

  	}

  	isFieldValid(field: string) { 
	 	return !this.form.get(field).valid && this.form.get(field).touched;
	}


	bookingForm(){
 

  		if (this.form.status == 'VALID') {
  			//$('form#contact-form').addClass('loading');

  			const params = new HttpParams({
		       fromObject : this.form.value
		    });

		    let promise = new Promise((resolve, reject) => {

		        let apiURL =  "http://kingsnuwaraeliya.com/kings-hotel/booking.php";
		        this.http.post(apiURL, params)
		          .toPromise()
		          .then(
		          res => { 

		            let data : any = res;
		            console.log(data);  

		            this.form.reset();

  					//$('form#contact-form').removeClass('loading');

  					// this.form = this.formBuilder.group({

				   //    Firstname: '',  
				   //    Lastname:  '',  
				   //    message:  '',
				   //    email:   '',
				   //    need:  ''
				      
				   //  });


				   // $('.success-msg').removeClass('d-none');

		            
		          	resolve();

			    }); 

			});

			return promise; 
	  		
  			 
  		}else{  
  			this.form.reset();
  			 
  			//$('.error-msg').removeClass('d-none');
  		} 
  	
  	}


}
