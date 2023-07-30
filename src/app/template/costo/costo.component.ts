import { Component } from '@angular/core';
import { TicketService } from 'src/app/services/ticket.service';
import { Ticket } from 'src/app/domain/ticket';
import { Vehiculo } from 'src/app/domain/vehiculo';
import { VehiculoService } from 'src/app/services/vehiculo.service';

@Component({
  selector: 'app-costo',
  templateUrl: './costo.component.html',
  styleUrls: ['./costo.component.scss']
})

export class CostoComponent {
  ticketACancelar: Ticket | undefined; // Inicializar como undefined
  numeroTicketABuscar: number = 0; // Puedes inicializar con un valor predeterminado o dejarlo sin valor
  vehiculoEncontrado: Vehiculo | null = null; // Inicializar como undefined

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
