import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private router: Router){
  }

  puestosTotales: number = 10;  // total de puestos
puestosOcupados: number = 0;  // cuantos puestos están ocupados actualmente

get puestosDisponibles(): number {
    return this.puestosTotales - this.puestosOcupados;
}
}