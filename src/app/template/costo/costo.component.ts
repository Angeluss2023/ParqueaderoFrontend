// import { Component, OnInit } from '@angular/core';
// import { TicketService } from 'src/app/services/ticket.service';
// import { Ticket } from 'src/app/domain/ticket';
// import { Vehiculo } from 'src/app/domain/vehiculo';
// import { VehiculoService } from 'src/app/services/vehiculo.service';
// import { Costo } from 'src/app/domain/costo';
// import { HttpClient } from '@angular/common/http';
// import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
// @Component({
//   selector: 'app-costo',
//   templateUrl: './costo.component.html',
//   styleUrls: ['./costo.component.scss']
// })

// export class CostoComponent implements OnInit{

//   costo: Costo = new Costo();
//   ticketACancelar: Ticket | undefined; 
//   numeroTicketABuscar: number = 0;
//   vehiculoEncontrado: Vehiculo | null = null; 
//   tiempo = new Date();
//   vehiculo: any;
//   listaDeVehiculos: Vehiculo[] = [];
//   listaDeTickets: Ticket[] = [];
//   constructor(private vehiculoService: VehiculoService, private ticketService: TicketService, private http: HttpClient)  {}


//   displayFn(ticket: Ticket): string {
//     return ticket ? ticket.idticket.toString() : '';
//   }

//   // ngOnInit() {
//   //   this.buscarVehiculoPorNumeroTicket();
//   // }

//   // ngOnInit(): void {
//   //   this.vehiculoService.getAll().subscribe((data: Vehiculo[]) => {
//   //     console.log(data);
//   //     this.listaDeVehiculos = data; 
//   //   }); 
//   //   this.vehiculoService.getAllT().subscribe((data:Ticket[]) =>{
//   //     this.listaDeTickets=data;
//   //     console.log("Tickest",this.listaDeTickets)
//   //     //this.generarNumeroTicket()
//   //   })

//   // }

//   ngOnInit(): void {
//     this.ticketService.getAll().subscribe((data: Ticket[]) => {
//         console.log(data);
//         this.listaDeTickets = data; 
//     }); 
// }


//   buscarVehiculoPorNumeroTicket() {
//     // Realizar la solicitud HTTP al backend con el número de ticket
//     this.http.get<any>(`/buscar-vehiculo/${this.numeroTicketABuscar}`).subscribe(
//       (data) => {
//         this.vehiculo = data; // Asignar la respuesta del backend al objeto vehiculo
//       },
//       (error) => {
//         console.error('Error al buscar el vehículo:', error);
//       }
//     );
//   }

//   // onOptionSelected(event: MatAutocompleteSelectedEvent) {
//   //   const selectedTicket = this.listaDeTickets.find(vehicle => vehicle.idticket === event.option.value);
//   //   if (selectedTicket) {
//   //     this.costo.tipo_vehiculo = selectedTicket.vehiculo.tipo_vehiculo; // Accedemos a tipo_vehiculo dentro de vehiculo
//   //     this.costo.hora_Entrada = selectedTicket.hora_entrada;
//   //     this.costo.placa = selectedTicket.vehiculo.placa; 
//   //     this.costo.puestoAsignado = String(selectedTicket.puestoAsignado);
//   //   }
//   // }  
 

//   onOptionSelected(event: MatAutocompleteSelectedEvent) {
//     const selectedTicket = this.listaDeTickets.find(vehicle => vehicle.idticket === event.option.value);
//     if (selectedTicket) {
//         this.costo.tipo_vehiculo = selectedTicket.vehiculo.tipo_vehiculo; 
//         this.costo.hora_Entrada = selectedTicket.hora_entrada;
//         this.costo.placa = selectedTicket.vehiculo.placa; 
//         this.costo.puestoAsignado = String(selectedTicket.puestoAsignado);
        
//         // Calculo del costo basado en las horas
//         const tarifaPorHora = 1.50; 
//         const horaEntrada = new Date(`1970-01-01T${selectedTicket.hora_entrada}Z`); 
//         const horaSalida = new Date();  // Suponiendo que la hora actual es la hora de salida
//         const diferenciaEnHoras = (horaSalida.getTime() - horaEntrada.getTime()) / (1000 * 60 * 60); 
//         this.costo.costo = (diferenciaEnHoras * tarifaPorHora).toFixed(2); 
//     }
// }
// }

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

  // ngOnInit() {
  //   this.buscarVehiculoPorNumeroTicket();
  // }

  // ngOnInit(): void {
  //   this.vehiculoService.getAll().subscribe((data: Vehiculo[]) => {
  //     console.log(data);
  //     this.listaDeVehiculos = data; 
  //   }); 
  //   this.vehiculoService.getAllT().subscribe((data:Ticket[]) =>{
  //     this.listaDeTickets=data;
  //     console.log("Tickest",this.listaDeTickets)
  //     //this.generarNumeroTicket()
  //   })

  // }

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

  // onOptionSelected(event: MatAutocompleteSelectedEvent) {
  //   const selectedTicket = this.listaDeTickets.find(vehicle => vehicle.id_ticket === event.option.value);
  //   if (selectedTicket) {
  //     this.costo.tipo_vehiculo = selectedTicket.vehiculo.tipo_vehiculo; // Accedemos a tipo_vehiculo dentro de vehiculo
  //     this.costo.hora_Entrada = selectedTicket.hora_entrada;
  //     this.costo.placa = selectedTicket.vehiculo.placa; 
  //     this.costo.puestoAsignado = String(selectedTicket.puestoAsignado);

      
  //   }
  // }  

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
    // Luego continúa con la lógica de cancelar el ticket...
  } else {
    // Es raro llegar a este punto, pero es bueno tener controles
    console.error('Error: se ha superado el número máximo de puestos.');
  }
}
}