import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeriodicTableComponent } from './periodic-table/periodic-table.component';


const routes: Routes = [{path: 'table' , component: PeriodicTableComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
