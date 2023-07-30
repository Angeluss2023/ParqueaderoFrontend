import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './template/principal/principal.component';
import { HistorialComponent } from './template/historial/historial.component';
import { CostoComponent } from './template/costo/costo.component';
import { TicketComponent } from './template/ticket/ticket.component';

const routes: Routes = [

  {path: "parqueo/registrar", component: PrincipalComponent},
  {path: "parqueo/cancelar", component: CostoComponent},
  {path: "parqueo/historial", component: HistorialComponent},
  {path: "parqueo/ticket", component: TicketComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
