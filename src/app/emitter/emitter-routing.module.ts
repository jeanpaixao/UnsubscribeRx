import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmitterBaseComponent } from './emitter-components/emitter-base.component';
import { EmitterComponent } from './emitter-components/emitter.component';


const routes: Routes = [
  {
    path: '', pathMatch: 'full', component: EmitterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmitterRoutingModule { }
