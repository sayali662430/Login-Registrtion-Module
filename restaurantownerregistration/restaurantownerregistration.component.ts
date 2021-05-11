import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import {RestaurantOwnerLogin} from '../restaurant-owner-login';
import { RestaurantserviceService } from '../restaurantservice.service';

@Component({
  selector: 'app-restaurantownerregistration',
  templateUrl: './restaurantownerregistration.component.html',
  styleUrls: ['./restaurantownerregistration.component.css']
})
export class RestaurantownerregistrationComponent implements OnInit {

  restaurantOwner:RestaurantOwnerLogin=new RestaurantOwnerLogin("","");
  restowner!: Observable<RestaurantOwnerLogin>;
submitted=false;

  constructor(private restaurantService:RestaurantserviceService,private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.submitted=true;
  this.restaurantService.RegisterationOfRestaurantOwner(this.restaurantOwner).subscribe(data=>alert("RestaurantOwner registered successfully"));
 this.router.navigate(['/restownerlogin']);
 //this.customer=new CustomerLogin("","");
  }

}









  

  
  




  

  

  
