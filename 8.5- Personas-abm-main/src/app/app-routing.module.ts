import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AbmPersonasComponent } from './abm-personas/abm-personas.component';
import { PipesComponent } from './pages/pipes/pipes.component';
import { ReactiveComponent } from './pages/reactive/reactive.component';
import { ServiciosPageComponent } from './pages/servPage/servicios-page/servicios-page.component';
import { TemplateComponent } from './pages/template/template.component';

const routes: Routes = [
  {path:'template', component:TemplateComponent},
  {path:'reactivo', component:ReactiveComponent},
  {path:'servicios', component:ServiciosPageComponent},
  {path:'pipes', component:PipesComponent},
  {path:'abmpersonas', component:AbmPersonasComponent},
  {path:'**', pathMatch:'full', redirectTo:'template'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
