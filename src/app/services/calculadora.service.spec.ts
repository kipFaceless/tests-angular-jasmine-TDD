import { TestBed } from '@angular/core/testing';

import { CalculadoraService } from './calculadora.service';

describe('CalculadoraService', () => {
  let service: CalculadoraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculadoraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should Subtract the actual value from 10 to 9', () => {
    let num = 10
    num = service.subtrairValor(num)
    expect(num).toBeTruthy()
    expect(num).toEqual(9)
  });
});
