import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateComponent } from './pages/template/template.component';
import { ReactiveComponent } from './pages/reactive/reactive.component';
import { PipesComponent } from './pages/pipes/pipes.component';
import { ConversorPipePipe } from './conversor-pipe.pipe';
import { Conversor2Pipe } from './conversor2.pipe';
import { Conversor3Pipe } from './conversor3.pipe';
import { HighlightDirective } from './highlight.directive';
import { ServiciosPageComponent } from './pages/servPage/servicios-page/servicios-page.component';
import { AbmPersonasComponent } from './abm-personas/abm-personas.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material/material.module';
import { CrearPersonaDialogComponent } from './abm-personas/crear-persona/crear-persona-dialog/crear-persona-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    ReactiveComponent,
    PipesComponent,
    ConversorPipePipe,
    Conversor2Pipe,
    Conversor3Pipe,
    HighlightDirective,
    ServiciosPageComponent,
    AbmPersonasComponent,
    CrearPersonaDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  exports: [
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
