import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoComponent } from './todo.component';

describe('TodoComponent', () => {
  let component: TodoComponent;
  let fixture: ComponentFixture<TodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe("addValues()", () => {
  let component: TodoComponent;
  let fixture: ComponentFixture<TodoComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });



  it("should return the sum of two numbers", () => {
  fixture.detectChanges();
    let a = component.a = 1
    let b = component.b = 2
    component.result = component.addValues(a,b)

      expect(component.result).toEqual(3);
  });

it("should return the sum of two negative numbers", () => {
       fixture.detectChanges();
      let a = component.a = -1
      let b = component.b = -2
      component.result = component.addValues(a,b)
      expect(component.result).toEqual(-3);
  });

  it("should return 0 when both numbers are 0", () => {
      expect(component.addValues(0,0)).toEqual(0);
  });
})
