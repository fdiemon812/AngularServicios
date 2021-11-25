import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoComponent } from './listado/listado.component';
import { AgregarComponent } from './agregar/agregar.component';
import { FormsModule } from '@angular/forms';
import { TotalComponent } from './total/total.component';



@NgModule({
  declarations: [
    ListadoComponent,
    AgregarComponent,
    TotalComponent
  ],exports:[

    ListadoComponent,
    AgregarComponent,
    TotalComponent

  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class FrutasModule { }
