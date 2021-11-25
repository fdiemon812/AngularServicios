import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FrutasModule } from './frutas/frutas.module';
import { FrutasService } from './frutas/services/frutas.service';
import { TotalService } from './frutas/services/total.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FrutasModule
  ],
  providers: [
    FrutasService,
    TotalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
