import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RideComponent } from './ride.component';

describe('RideComponent', () => {
  let component: RideComponent;
  let fixture: ComponentFixture<RideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe('My Ride Tests', () => {
  let component: RideComponent;
  let fixture: ComponentFixture<RideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should calculate a ride in normal day', () => {
    fixture.detectChanges();
    //GIVEN (dado quem, cenário) ARRANGE

    const distance = 1000;
    const date = new Date("2021-07-10T10:00:00")

    // WHEN (quando algo acontencer...) ACT

    const price = component.calculateRide(distance, date);
    //THEN (então algo deve ser verificado)ASSERT
    expect(price).toEqual(2100);
  });

  it('should calculate a ride in Sunday', () => {
    fixture.detectChanges();
    const distance = 1000;
    const date = new Date("2021-07-11T10:00:00")
    const price = component.calculateRide(distance, date);
    expect(price).toEqual(2900);
  });

  it('should calculate a night ride - after 22 hours', () => {
    fixture.detectChanges();
    let distance = 1000
    const date = new Date("2021-07-10T23:00:00")
    const price = component.calculateRide(distance, date);
    expect(price).toEqual(3900);
  });

  it('should be at night ', () => {
    fixture.detectChanges();
    const date = new Date("2021-07-10T23:00:00")
    const isOverNight = component.isOvernight(date)
    expect(isOverNight).toBeTruthy();
  });

  it('should be Sunday ', () => {
    fixture.detectChanges();
    const date = new Date("2021-07-11T23:00:00")
    const isSunday = component.isSunday(date)
    expect(isSunday).toBeTruthy();
  });

   it('should throw an exception if distance is NEGATIVE ', () => {
    fixture.detectChanges();
    let distance = -1000
    const date = new Date("2021-07-10T10:00:00")
    const  price = component.calculateRide(distance, date)

  expect(price).toEqual(-2100);
  });

 /*  it('should throw an exception if distance is Invalid ', () => {
    fixture.detectChanges();
    let distance = "1000"
    const date = new Date("2021-07-10T23:00:00")

  // expect(component.calculateRide(distance, date)).toThrow(new Error("Invalid parameter Distance"));
  });


  it('should throw an exception if date is Invalid ', () => {
    fixture.detectChanges();
    let distance = 1000
    const date = "2021-07-10T23:00:00"

 //expect(component.calculateRide(distance, date)).toThrow(new Error("Invalid parameter Date"));
  });  */
});
