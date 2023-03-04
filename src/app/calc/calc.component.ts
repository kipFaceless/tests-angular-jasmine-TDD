import { Component} from '@angular/core';
import { CalculadoraService } from './../services/calculadora.service';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.scss']
})
export class CalcComponent {

 resultado: number = 0;
 mensagem : string ='';
 counter : number = 10;
constructor(private calculadoraService : CalculadoraService){

}
 somarValor(){
  this.resultado +=1;
  this.gerarInformacao("Você adicionou 1 ao resultado")
 }

 increaseBy(value : number){
    this.counter +=value;
 }

 decrementarValor(){
  this.resultado  = this.calculadoraService.subtrairValor(this.resultado)
  this.gerarInformacao("Você Removeu 1 ao resultado")
 }

 private gerarInformacao(info:string):void{
    this.mensagem = info
 }
}
