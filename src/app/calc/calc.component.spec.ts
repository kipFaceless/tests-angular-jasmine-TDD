import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcComponent } from './calc.component';
import { CalculadoraService } from './../services/calculadora.service';

describe('CalcComponent', () => {
  let component: CalcComponent;
  let fixture: ComponentFixture<CalcComponent>;

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
});
