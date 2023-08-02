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

  MAX_PUESTOS: number = 10; 
  puestosTotales: number = this.MAX_PUESTOS; // Inicialmente, todos los puestos están disponibles.

  // ... el resto del código de tu componente


  get puestosDisponibles(): number {
  return this.MAX_PUESTOS - this.puestosTotales;
  }

}