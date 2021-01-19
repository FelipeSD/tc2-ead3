import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetalhesComponent } from './detalhes/detalhes.component';
import { FormularioComponent } from './formulario/formulario.component';

const routes: Routes = [
  {path: "", component: DashboardComponent, pathMatch: "full"},
  {path: "products", component: CatalogoComponent},
  {path: "products/details/:id", component: DetalhesComponent},
  {path: "products/new", component: FormularioComponent},
  {path: "products/delete/:id", component: FormularioComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
