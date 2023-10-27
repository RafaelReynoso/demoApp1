import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SelectornumericoComponent } from './selectornumerico/selectornumerico.component';
import { ListadoarticulosComponent } from './listadoarticulos/listadoarticulos.component';
import { TareaComponent } from './tarea/tarea.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectornumericoComponent,
    ListadoarticulosComponent,
    TareaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
