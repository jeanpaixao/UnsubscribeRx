import { Component, OnDestroy, OnInit } from '@angular/core';
import { pipe } from 'rxjs';
import { EmitterService } from '../emitter.service';

@Component({
  selector: 'app-emitter-poc1',
  template: `
  <app-emitter-base id='1' [nome]='valor' telefone='83 9 86854584'></app-emitter-base>
  `,  
})
export class EmitterPoc1Component implements OnInit, OnDestroy {

  valor: string;

  constructor(private emmitterService: EmitterService) { }

  ngOnInit(): void {
    
    this.emmitterService.getValor().subscribe(novoValor => this.valor = novoValor);

  }

  ngOnDestroy() {
    console.log('componente destruído');
  }


}
