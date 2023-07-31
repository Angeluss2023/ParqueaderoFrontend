import { Component } from '@angular/core';
import { TicketService } from 'src/app/services/ticket.service';
import { Ticket } from 'src/app/domain/ticket';
import { Vehiculo } from 'src/app/domain/vehiculo';
import { VehiculoService } from 'src/app/services/vehiculo.service';
import { Costo } from 'src/app/domain/costo';

@Component({
  selector: 'app-costo',
  templateUrl: './costo.component.html',
  styleUrls: ['./costo.component.scss']
})

export class CostoComponent {

  costo: Costo = new Costo();
  ticketACancelar: Ticket | undefined; 
  numeroTicketABuscar: number = 0;
  vehiculoEncontrado: Vehiculo | null = null; 
 tiempo = new Date();
  constructor(private vehiculoService: VehiculoService, private ticketService: TicketService) {}

  // buscarVehiculoPorNumeroTicket(): void {
  //   this.vehiculoEncontrado = this.vehiculoService.obtenerVehiculoPorNumeroTicket(this.numeroTicketABuscar);
  
  //   if (this.vehiculoEncontrado) {
  //     this.ticketACancelar = this.ticketService.obtenerTicketPorNumero(this.numeroTicketABuscar);
  
  //   } else {
  //     this.ticketACancelar = undefined;
  //     console.log('No se encontró ningún vehículo con el número de ticket dado.');
  
  //     this.numeroTicketABuscar = 0;
  //   }
  // }
  
}
