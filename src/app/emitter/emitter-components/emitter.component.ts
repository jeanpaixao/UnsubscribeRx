import { Component, OnDestroy, OnInit } from '@angular/core';
import { EmitterService } from '../emitter.service';

@Component({
  selector: 'app-emitter',
  template: `
  <button class="btn btn-primary" (click)="destruirComponents()">
    Construir/Destruir Components
  </button>
  <div class="form-group mr-sm-2">
      <input type="text" class="form-control" #valor placeholder="Valor">
  </div>
  <div class="form-group mx-sm-2">
    <button type="button" class="btn btn-outline-primary" (click)="emitirValor(valor.value)">
       Emitir Valor
    </button>
    {{valor}}
  </div>   

  <div  *ngIf="component">
    <app-emitter-poc1></app-emitter-poc1>
    <app-emitter-poc2></app-emitter-poc2>
  </div>
 
  `,
})
export class EmitterComponent implements OnInit, OnDestroy {




  component: boolean;

  constructor(private emissorService: EmitterService) { }

  ngOnInit(): void {

  }

  destruirComponents() {
    this.component = !this.component;    
  }

  emitirValor(valor: string) {
    this.emissorService.emitirValor(valor);
  }

  ngOnDestroy() {
    console.log('componente destruído');
  }

}
