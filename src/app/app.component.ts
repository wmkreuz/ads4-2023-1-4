import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  public cliente:string = '';

  public produto:string = '';

  public qtde:number = 0;

  public valor:number = 0;

  public show: string = '';

  public recibo: string = '';

  incrementar():number{
    return this.qtde += 1;
  }

  decrementar():number{
    if( !((this.qtde -= 1) <= 0) ){
      return this.qtde -= 1;
    } else {
      return this.qtde = 0;
    }
    
  }

  visualizarRecibo() {
    this.show = 'Sim'
    this.recibo = '******************************************\n' +
                  'RECIBO DE VENDA\n' +
                  '******************************************\n' +
                  'Cliente...........: ' + this.cliente +
                  '\nProduto...........: ' + this.produto +
                  '\nQuantidade........: ' + this.qtde + 'x - R$' + this.valor + '.00' +
                  '\n__________________________________________\n' +
                  '\nValor Total (R$)..: R$' + this.valor * this.qtde + '.00';
  }

}
