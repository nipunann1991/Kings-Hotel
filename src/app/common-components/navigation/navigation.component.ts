import { Component, OnInit } from '@angular/core';
import { Globals } from '../../app.global';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

	address: any; tel: any; email: any;

 	constructor(private globals: Globals) { }

  	ngOnInit() {

  		this.address = this.globals.contact_details.address;
  		this.tel = this.globals.contact_details.tel;
  		this.email = this.globals.contact_details.email;

  	}

}
