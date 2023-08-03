import { Component, OnInit } from '@angular/core';
import { TicketService } from 'src/app/services/ticket.service';
import { Ticket } from 'src/app/domain/ticket';
import { Vehiculo } from 'src/app/domain/vehiculo';
import { VehiculoService } from 'src/app/services/vehiculo.service';
import { Costo } from 'src/app/domain/costo';
import { HttpClient } from '@angular/common/http';

import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
@Component({
  selector: 'app-costo',
  templateUrl: './costo.component.html',
  styleUrls: ['./costo.component.scss']
})

export class CostoComponent implements OnInit{

  MAX_PUESTOS: number = 10; 
  puestosTotales: number = this.MAX_PUESTOS;

  //puestosTotales: number = 10;  // total de puestos
  //puestosOcupados: number = 0;
  costo: Costo = new Costo();
  ticketACancelar: Ticket | undefined; 
  numeroTicketABuscar: number = 0;
  vehiculoEncontrado: Vehiculo | null = null; 
  tiempo = new Date();
  vehiculo: any;
  listaDeVehiculos: Vehiculo[] = [];
  listaDeTickets: Ticket[] = [];
  constructor(private vehiculoService: VehiculoService, private ticketService: TicketService, private http: HttpClient)  {}

  /////////////////////////////////

  //costo:

  displayFn(ticket: Ticket): string {
         return ticket ? ticket.id_ticket.toString() : '';
  }


  ngOnInit(): void {
      this.ticketService.getAll().subscribe((data: Ticket[]) => {
         console.log(data);
         this.listaDeTickets = data; 
       }); 
       this.ticketService.getAll().subscribe((data:Ticket[]) =>{
         this.listaDeTickets=data;
         console.log("Tickest",this.listaDeVehiculos)
         //this.generarNumeroTicket()
       })
  
  }

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

  onOptionSelected(event: MatAutocompleteSelectedEvent) {
    const selectedTicket = this.listaDeTickets.find(vehicle => vehicle.id_ticket === event.option.value);
    if (selectedTicket) {
        this.costo.tipo_vehiculo = selectedTicket.vehiculo.tipo_vehiculo; 
        this.costo.hora_Entrada = selectedTicket.hora_entrada;
        this.costo.placa = selectedTicket.vehiculo.placa; 
        this.costo.puestoAsignado = String(selectedTicket.puestoAsignado);

        // Calculo del costo basado en las horas
        const tarifaPorHora = 1.50;

        // La fecha actual y hora de salida se obtienen en tiempo real
        const horaActual = new Date();
        const horaSalida = horaActual.getHours() + ":" + horaActual.getMinutes();

        const partesHoraEntrada = this.costo.hora_Entrada.split(':');
        const partesHoraSalida = horaSalida.split(':');

        const entradaEnMinutos = parseInt(partesHoraEntrada[0]) * 60 + parseInt(partesHoraEntrada[1]);
        const salidaEnMinutos = parseInt(partesHoraSalida[0]) * 60 + parseInt(partesHoraSalida[1]);

        const diferenciaEnMinutos = salidaEnMinutos - entradaEnMinutos;
        const horasACobrar = Math.ceil(diferenciaEnMinutos / 60);

        const costoCalculado = horasACobrar * tarifaPorHora;
        this.costo.costo = costoCalculado.toFixed(2).toString();  // Convierte a cadena con dos decimales
        //this.costo.costo = parseFloat(costoCalculado.toFixed(2));  // Redondea al segundo decimal
    }
}

   cancelarTicket() {
     if (this.puestosTotales < this.MAX_PUESTOS) {
       this.puestosTotales++;
     } else {
       console.error('Error: se ha superado el número máximo de puestos.');
       alert("Ticket cancelado")
     }
   }

  // cancelarTicket() {
  //   if (this.costo.id_ticket !== null) {
  //     this.ticketService.cancelarTicket(this.costo.id_ticket).subscribe(
  //       () => {
  //         // Maneja el éxito de la cancelación en la interfaz de usuario si es necesario
  //         console.log('Ticket cancelado exitosamente.');
  //         // Puedes actualizar la interfaz de usuario, mostrar un mensaje, etc.
          
  //         if (this.puestosTotales < this.MAX_PUESTOS) {
  //           this.puestosTotales++;
  //           console.log('Puesto liberado exitosamente.');
  //         } else {
  //           console.error('Error: se ha superado el número máximo de puestos.');
  //         }
  //       },
  //       (error: any) => {
  //         console.error('Error al cancelar el ticket:', error);
          
  //         // Maneja el error adecuadamente en la interfaz de usuario si es necesario
  //       }
  //     );
  //   }
  // }
}