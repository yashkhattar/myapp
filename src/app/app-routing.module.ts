import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChildComponent } from './child/child.component';
import {JsonComponent} from './json/json.component';
import {NewComponent} from './new/new.component';
import {TileComponent} from './tile/tile.component'

const routes: Routes = [
  {path: 'json' , component: JsonComponent},
  {path: 'child' , component: ChildComponent},
  {path: 'new' , component: NewComponent},
  {path: 'tile' , component: TileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
