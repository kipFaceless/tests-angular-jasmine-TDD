import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcComponent } from './calc.component';
import { CalculadoraService } from './../services/calculadora.service';

describe('CalcComponent', () => {
  let component: CalcComponent;
  let fixture: ComponentFixture<CalcComponent>;
  let compiled = HTMLElement;  // Acrescentei para pegar elementos HTML

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalcComponent ],
      providers : [CalculadoraService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement   // Acrescentei para pegar elementos HTML
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should Add 1 to the value and return 1', () => {
    fixture.detectChanges();

    component.resultado = 0
    component.somarValor()
    expect(component.somarValor).toBeTruthy();
    expect(component.resultado).toBeGreaterThan(0)
    expect(component.resultado).toEqual(1)
  });

  it('should Remove 1 in 5 to have 4 ', () => {
    fixture.detectChanges();
    const calculadoraService = new CalculadoraService()

    component.resultado = 5
    spyOn(calculadoraService, 'subtrairValor')(component.resultado)
    component.decrementarValor()
    expect(component.resultado).toBeTruthy()
    expect(component.resultado).toBeGreaterThan(0)
    expect(component.resultado).toEqual(4)
    expect(calculadoraService.subtrairValor).toHaveBeenCalled()

  });

  it('should Test a private method ', () => {
    fixture.detectChanges();

    component.mensagem = ''
    component['gerarInformacao']('Olá Mundo') // A forma de aceder métodos privados component['nome_do_metodo'](parametro)
    expect(component.mensagem).toBeTruthy()
    expect(component.mensagem).toEqual('Olá Mundo')

  });

  it('should confirm if the increaseBy method is receiving a parameter ', () => {
    fixture.detectChanges();
    component.increaseBy(5)
    expect(component.counter).toBe(15)

  });

  it('should increase 1 after click in increaseBy method  ', () => {
    fixture.detectChanges();
    const button = fixture.debugElement.nativeElement.querySelector('.btn');
    button.click()
    expect(component.counter).toBe(11)
  });
  it('should increase 2 after dblclick in increaseBy method  ', () => {
    fixture.detectChanges();
    const button = fixture.debugElement.nativeElement.querySelector('.btn');
    button.click();
    button.click();
    expect(component.counter).toBe(12);
  });
  it('should update the h1 COUNTER template', () => {

    component.increaseBy(10)
    fixture.detectChanges();
    //const h1Element = fixture.debugElement.nativeElement.getElementsByTagName('h1');
    const h1Element = fixture.debugElement.nativeElement.querySelector('.h1Element');
    expect(h1Element?.textContent).toContain(20);
   // expect(divElements.length).toBeGreaterThan(0);
   });
});
