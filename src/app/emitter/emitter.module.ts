import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmitterRoutingModule } from './emitter-routing.module';
import { EmitterBaseComponent } from './emitter-components/emitter-base.component';
import { EmitterComponent } from './emitter-components/emitter.component';
import { EmitterPoc1Component } from './emitter-components/emitter-poc1.component';
import { EmitterPoc2Component } from './emitter-components/emitter-poc2.component';


@NgModule({
  declarations: [EmitterBaseComponent, EmitterComponent, EmitterPoc1Component, EmitterPoc2Component],
  imports: [
    CommonModule,
    EmitterRoutingModule
  ]
})
export class EmitterModule { }
