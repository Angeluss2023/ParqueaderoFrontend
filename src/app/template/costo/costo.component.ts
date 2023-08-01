import { Component, OnInit } from '@angular/core';
import { TicketService } from 'src/app/services/ticket.service';
import { Ticket } from 'src/app/domain/ticket';
import { Vehiculo } from 'src/app/domain/vehiculo';
import { VehiculoService } from 'src/app/services/vehiculo.service';
import { Costo } from 'src/app/domain/costo';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-costo',
  templateUrl: './costo.component.html',
  styleUrls: ['./costo.component.scss']
})

export class CostoComponent implements OnInit{

  costo: Costo = new Costo();
  ticketACancelar: Ticket | undefined; 
  numeroTicketABuscar: number = 0;
  vehiculoEncontrado: Vehiculo | null = null; 
  tiempo = new Date();
  vehiculo: any;
  constructor(private vehiculoService: VehiculoService, private ticketService: TicketService, private http: HttpClient)  {}

  ngOnInit() {
    // Llama a la función de búsqueda cuando se inicializa el componente
    this.buscarVehiculoPorNumeroTicket();
  }
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

  buscarVehiculoPorNumeroTicket() {
    // Realizar la solicitud HTTP al backend con el número de ticket
    this.http.get<any>(`/buscar-vehiculo/${this.numeroTicketABuscar}`).subscribe(
      (data) => {
        this.vehiculo = data; // Asignar la respuesta del backend al objeto vehiculo
      },
      (error) => {
        console.error('Error al buscar el vehículo:', error);
      }
    );
  }
  
}
