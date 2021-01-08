import { Component, OnDestroy, OnInit } from '@angular/core';
import { EmitterService } from '../emitter.service';

@Component({
  selector: 'app-emitter-poc2',
  template: `
  <app-emitter-base id='2' nome='Jean' telefone='83 9 96953457'></app-emitter-base>
  `,
})
export class EmitterPoc2Component implements OnInit, OnDestroy {

  constructor(private emitterService: EmitterService) { }


  ngOnInit(): void {
    this.emitterService.getValor().pipe()
  }

  ngOnDestroy() {
    console.log('componente destruído');
  }


}
