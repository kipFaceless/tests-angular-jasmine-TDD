import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderComponent } from './order.component';
import Cpf from 'src/app/classes/Cpf';
import Item from 'src/app/classes/Item';
import Coupon from 'src/app/classes/Coupon';

describe('OrderComponent', () => {
  let component: OrderComponent;
  let fixture: ComponentFixture<OrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create an Order with valid CPF', () => {
    const cpf = new Cpf("839.435.452-10")
    const order = component.order(cpf);
    const total = component.getTotal()
    expect(total).toBe(0)
  });

  it('should create an Order with 3 items', () => {
    component.addItem(new Item(1, "Music", "CD", 30), 3)
    component.addItem(new Item(2, "Video", "DVD",50), 1)
    component.addItem(new Item(13, "Video", "VHS",10), 2)
    const total = component.getTotal()
    expect(total).toBe(160)
  });

  it('should create an Order with a discount cupon of 20%', () => {
    component.addItem(new Item(1, "Music", "CD", 30), 3);
    component.addItem(new Item(2, "Video", "DVD",50), 1);
    component.addItem(new Item(13, "Video", "VHS",10), 2);
    component.addCoupon(new Coupon("VALE20", 20));
    const total = component.getTotal()
    expect(total).toBe(128)
  });

});
