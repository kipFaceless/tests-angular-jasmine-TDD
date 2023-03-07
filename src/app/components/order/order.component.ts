import { Component, OnInit } from '@angular/core';
import Coupon from 'src/app/classes/Coupon';
import Cpf from 'src/app/classes/Cpf';
import Item from 'src/app/classes/Item';
import orderItem from 'src/app/classes/OrderItem';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  orderIems : orderItem[]
  coupon : Coupon | undefined
  constructor() {
    this.orderIems = []
   }

  ngOnInit(): void {
  }

  order(cpf : Cpf){
    return cpf.validCpf
  }
  addItem(item:Item, quanity:number){
    this.orderIems.push(new orderItem(item.idItem, item.price, quanity))

  }

  addCoupon(coupon : Coupon){
        this.coupon = coupon
  }

  getTotal=() =>{
    let total = 0;
    for(let orderItem of this.orderIems){
      total += orderItem.getTotal();
    }
    if(this.coupon){
      total -= (total * this.coupon.percentagem)/100
    }
    return total;
  }

}
