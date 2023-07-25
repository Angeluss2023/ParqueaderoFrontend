import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './template/header/header.component';
import { PrincipalComponent } from './template/principal/principal.component';
import { HistorialComponent } from './template/historial/historial.component';
import { MenuComponent } from './template/menu/menu.component';
import { CostoComponent } from './template/costo/costo.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PrincipalComponent,
    HistorialComponent,
    MenuComponent,
    CostoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
