import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    AppComponent,
    FormularioComponent,
  ],
  providers: [],
})
export class AppModule {}