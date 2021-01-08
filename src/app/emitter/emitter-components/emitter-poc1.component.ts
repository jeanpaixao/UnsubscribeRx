import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-emitter-poc1',
  template: `
  <app-emitter-base id='1' nome='Paulo' telefone='83 9 86854584'></app-emitter-base>
  `,  
})
export class EmitterPoc1Component implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    console.log('componente destruído');
  }


}
