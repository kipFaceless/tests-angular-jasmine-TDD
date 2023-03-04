import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {
  subtrairValor(qtdAtual:number):number{
      return qtdAtual -1
  }
}
