import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ride',
  templateUrl: './ride.component.html',
  styleUrls: ['./ride.component.scss']
})
export class RideComponent implements OnInit {
price : number = 0
rideDate  = new Date()
  constructor() { }

  ngOnInit(): void {
  }

  isOvernight = (rideDate: Date) => rideDate.getHours() >= 22 ;

  isSunday  = (rideDate: Date) => rideDate.getDay() === 0;

  calculateRide(distance:number, rideDate: Date): number{
    const OVERNIGHT_RATE = 3.90;
    const SUNDAY_RATE = 2.90;
    const NORMAL_RATE = 2.10;
    //if(distance < 0) throw new Error("Invalid negative distance");
    if((typeof distance !== "number") || (!(rideDate instanceof Date))) throw new Error("Invalid Parameter");
    if(this.isOvernight(rideDate))return this.price = distance * OVERNIGHT_RATE;
    if(this.isSunday(rideDate) ) return this.price = distance * SUNDAY_RATE;
    return this.price = distance * NORMAL_RATE;
  }
}
