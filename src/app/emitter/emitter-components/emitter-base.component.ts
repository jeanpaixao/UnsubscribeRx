import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { EmitterService } from '../emitter.service';

@Component({
  selector: 'app-emitter-base',
  template: `  
 <div class="card" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title">{{ id }}</h5>
        <h6 class="card-subtitle mb-2 text-muted">{{ nome }}</h6>
        <p class="card-text">{{ telefone }}</p>
    </div>
</div> ` 
})
export class EmitterBaseComponent implements OnInit{

  @Input() id: number;
  @Input() nome: string;
  @Input() telefone: string;

  valor: string;

  constructor(private emitterService: EmitterService) { }

  ngOnInit(): void {  
  
  }



}
