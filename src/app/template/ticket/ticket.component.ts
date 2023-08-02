// import { Component } from '@angular/core';
// import { Ticket } from 'src/app/domain/ticket';
// import { VehiculoService } from 'src/app/services/vehiculo.service';
// import { TicketService } from 'src/app/services/ticket.service';
// import {  OnInit } from '@angular/core';
// import { Vehiculo } from 'src/app/domain/vehiculo';
// import { ActivatedRoute, Router } from '@angular/router';
// import { DatePipe } from '@angular/common';
// import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
// @Component({
//   selector: 'app-ticket',
//   templateUrl: './ticket.component.html',
//   styleUrls: ['./ticket.component.scss']
// })

// export class TicketComponent implements OnInit{

//   placa!: string;
//   vehiculo: Vehiculo = new Vehiculo();
//   nuevoTicket: Ticket = new Ticket();
//   fechaFormateada: string = ''; 
//   listaDeVehiculos: Vehiculo[] = [];
//   tipoVehiculoAutomatico = '';
//   listaDeTickets: Ticket[] = [];
//   tiempo = new Date();
//   vehiculoEncontrado: Vehiculo | null = null;
//   vehiculoNoEncontrado: boolean = false;

//   constructor(private vehiculoService: VehiculoService, private ticketService: TicketService, private router: Router,private datePipe: DatePipe) {
//     let params = this.router.getCurrentNavigation()?.extras.queryParams;
//     if(params){
//       console.log(params)
//       this.nuevoTicket = new Ticket()
//       this.nuevoTicket = params['Ticket']
//     }
//   }

//   ngOnInit(): void {
//     this.vehiculoService.getAll().subscribe((data: Vehiculo[]) => {
//       console.log(data);
//       this.listaDeVehiculos = data; 
//     }); 
//     this.vehiculoService.getAllT().subscribe((data:Ticket[]) =>{
//       this.listaDeTickets=data;
//       console.log("Tickest",this.listaDeTickets)
//       this.generarNumeroTicket()
//     })
//   }
  
//   //  guardarTicket(): void {
//   //    console.log(this.vehiculo.placa);
//   //    console.log(this.nuevoTicket);
//   //    this.nuevoTicket.vehiculo.placa = this.vehiculo.placa;
//   //    this.nuevoTicket.vehiculo.tipo_vehiculo = this.vehiculo.tipo_vehiculo;
  
//   //    if (this.nuevoTicket.fecha) {
//   //      this.nuevoTicket.fecha = this.datePipe.transform(this.nuevoTicket.fecha, 'yyyy-MM-dd') || '';
//   //    } else {
//   //      this.nuevoTicket.fecha = '';
//   //    }
  
//   //    const date = new Date();
//   //    this.nuevoTicket.hora_entrada = date.toLocaleTimeString();
//   //    this.nuevoTicket.hora_salida = date.toLocaleTimeString();
  
//   //    this.ticketService.save(this.nuevoTicket).subscribe(
//   //      data => {
//   //        console.log("resultado WS save", data);
  
//   //        // Añade el nuevo ticket a la lista.
//   //      this.listaDeTickets.push(this.nuevoTicket);
  
//   //        // Incrementar el número de ticket para la siguiente entrada
//   //        this.nuevoTicket.idticket = this.listaDeTickets.length + 1;
  
//   //        // Incrementar puestoAsignado para el siguiente ticket, solo si es menor que 10
//   //        if (this.nuevoTicket.puestoAsignado < 10) {
//   //          this.nuevoTicket.puestoAsignado++;
//   //        } else {
//   //          console.warn("Todos los puestos están ocupados.");
//   //        }
//   //      },
//   //      error => {
//   //        console.error("Error al guardar el ticket:", error);
//   //      }
//   //    );
  
//   //   //Reinicializar nuevoTicket para la próxima entrada.
//   // this.nuevoTicket = new Ticket();
//   //   this.nuevoTicket.puestoAsignado = this.listaDeTickets.length % 10 + 1;
//   // }

// //  guardarTicket(): void {
// //   console.log(this.vehiculo.placa);
// //   //console.log(this.vehiculo.placa);
// //   console.log(this.nuevoTicket);
// //   this.nuevoTicket.vehiculo.placa = this.vehiculo.placa;
// //   this.nuevoTicket.vehiculo.tipo_vehiculo = this.vehiculo.tipo_vehiculo;

// //   if (this.nuevoTicket.fecha) {
// //     this.nuevoTicket.fecha = this.datePipe.transform(this.nuevoTicket.fecha, 'yyyy-MM-dd') || '';
// //   } else {
// //     this.nuevoTicket.fecha = '';
// //   }

// //   const date = new Date();
// //   this.nuevoTicket.hora_entrada = date.toLocaleTimeString();
// //   this.nuevoTicket.hora_salida = date.toLocaleTimeString();

// //   this.ticketService.save(this.nuevoTicket).subscribe(
// //     data => {
// //       console.log("resultado WS save", data);

// //       // Añade el nuevo ticket a la lista.
// //       this.listaDeTickets.push(this.nuevoTicket);

// //       // Incrementar el número de ticket para la siguiente entrada
// //       this.nuevoTicket.idticket = this.listaDeTickets.length + 1;

// //       // Incrementar puestoAsignado para el siguiente ticket, solo si es menor que 10
// //       if (this.nuevoTicket.puestoAsignado < 10) {
// //         this.nuevoTicket.puestoAsignado++;
// //       } else {
// //         console.warn("Todos los puestos están ocupados.");
// //       }
// //     },
// //     error => {
// //       console.error("Error al guardar el ticket:", error);
// //     }
// //   );

// //   // Reinicializar nuevoTicket para la próxima entrada.
// //   this.nuevoTicket = new Ticket();
// //   this.nuevoTicket.puestoAsignado = this.listaDeTickets.length % 10 + 1;
// // }

// guardarTicket(): void {
//   console.log(this.vehiculo.placa);
//   this.nuevoTicket.vehiculo.placa = this.vehiculo.placa;
//   this.nuevoTicket.vehiculo.tipo_vehiculo = this.vehiculo.tipo_vehiculo;

//   if (this.nuevoTicket.fecha) {
//     this.nuevoTicket.fecha = this.datePipe.transform(this.nuevoTicket.fecha, 'yyyy-MM-dd') || '';
//   } else {
//     this.nuevoTicket.fecha = '';
//   }

//   const date = new Date();
//   this.nuevoTicket.hora_entrada = date.toLocaleTimeString();
//   this.nuevoTicket.hora_salida = date.toLocaleTimeString();

//   this.ticketService.save(this.nuevoTicket).subscribe(
//     data => {
//       console.log("resultado WS save", data);

//       // Añade el nuevo ticket a la lista.
//       this.listaDeTickets.push(this.nuevoTicket);

//       // Incrementar el número de ticket para la siguiente entrada
//       this.nuevoTicket.idticket = this.listaDeTickets.length + 1;

//       // Incrementar puestoAsignado para el siguiente ticket, solo si es menor que 10
//       if (this.nuevoTicket.puestoAsignado < 10) {
//         this.nuevoTicket.puestoAsignado++;
//       } else {
//         console.warn("Todos los puestos están ocupados.");
//       }
//     },
//     error => {
//       console.error("Error al guardar el ticket:", error);
//     }
//   );

//   // Reinicializar nuevoTicket para la próxima entrada.
//   this.nuevoTicket = new Ticket();
//   this.nuevoTicket.puestoAsignado = this.listaDeTickets.length % 10 + 1;
// }

//   generarNumeroTicket(): void {
//     const ultimoNumeroTicket = this.listaDeTickets.length ;
//     this.nuevoTicket.idticket = ultimoNumeroTicket + 1;
//   }

//   buscarTipoVehiculo() {
//     const placaIngresada = this.nuevoTicket.vehiculo.placa.trim().toUpperCase(); // Normalizar la placa ingresada
//     const vehiculoEncontrado = this.listaDeVehiculos.find(vehiculo => vehiculo.placa.trim().toUpperCase() === placaIngresada);
  
//     if (vehiculoEncontrado) {
//       this.nuevoTicket.vehiculo.tipo_vehiculo = vehiculoEncontrado.tipo_vehiculo; // Corregir el nombre de la propiedad aquí
//     } else {
//       // Si no se encontró un vehículo con la placa ingresada, puedes mostrar un mensaje de error o dejar el campo en blanco
//       this.nuevoTicket.vehiculo.tipo_vehiculo = ''; // Corregir el nombre de la propiedad aquí
//       console.log('Vehículo no encontrado');
//     }
//   }
  
//   onOptionSelected(event: MatAutocompleteSelectedEvent) {
//     const selectedVehicle = this.listaDeVehiculos.find(vehicle => vehicle.placa === event.option.value);
//     if (selectedVehicle) {
//       this.vehiculo.placa = selectedVehicle.placa;
//       this.vehiculo.tipo_vehiculo = selectedVehicle.tipo_vehiculo;
//       this.vehiculo.color = selectedVehicle.color;
//     }
//   }
// }

import { Component } from '@angular/core';
import { Ticket } from 'src/app/domain/ticket';
import { VehiculoService } from 'src/app/services/vehiculo.service';
import { TicketService } from 'src/app/services/ticket.service';
import {  OnInit } from '@angular/core';
import { Vehiculo } from 'src/app/domain/vehiculo';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { format } from 'date-fns';
@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})

export class TicketComponent implements OnInit{

  placa!: string;
  vehiculo: Vehiculo = new Vehiculo();
  nuevoTicket: Ticket = new Ticket();
  fechaFormateada: string = ''; 
  listaDeVehiculos: Vehiculo[] = [];
  tipoVehiculoAutomatico = '';
  listaDeTickets: Ticket[] = [];
  tiempo = new Date();
  vehiculoEncontrado: Vehiculo | null = null;
  vehiculoNoEncontrado: boolean = false;
  puestosTotales: number = 10;  // total de puestos
  puestosOcupados: number = 0;

  // En HeaderComponent y TicketComponent
MAX_PUESTOS: number = 10; // Aquí define el valor adecuado

// ... resto del código de la clase


  constructor(private vehiculoService: VehiculoService, private ticketService: TicketService, private router: Router,private datePipe: DatePipe) {
    let params = this.router.getCurrentNavigation()?.extras.queryParams;
    if(params){
      console.log(params)
      this.nuevoTicket = new Ticket()
      this.nuevoTicket = params['Ticket']
    }
  }

  ngOnInit(): void {
    this.vehiculoService.getAll().subscribe((data: Vehiculo[]) => {
      console.log(data);
      this.listaDeVehiculos = data; 
    }); 
    this.vehiculoService.getAllT().subscribe((data:Ticket[]) =>{
      this.listaDeTickets=data;
      console.log("Tickest",this.listaDeTickets)
      this.generarNumeroTicket()
    })
  }
  
  // guardarTicket(): void {
  //   console.log(this.vehiculo.placa);
  //   this.nuevoTicket.vehiculo.placa = this.vehiculo.placa;
  //   this.nuevoTicket.vehiculo.tipo_vehiculo = this.vehiculo.tipo_vehiculo;
  
  //   if (this.nuevoTicket.fecha) {
  //     this.nuevoTicket.fecha = this.datePipe.transform(this.nuevoTicket.fecha, 'yyyy-MM-dd') || '';
  //   } else {
  //     this.nuevoTicket.fecha = '';
  //   }
  
  //   const date = new Date();
  //   const formattedTime = format(date, 'HH:mm:ss');
    
  //   this.nuevoTicket.hora_entrada = formattedTime;
  //   this.nuevoTicket.hora_salida = formattedTime;
 
  //   this.ticketService.save(this.nuevoTicket).subscribe(
  //     data => {
  //       console.log("resultado WS save", data);
  
  //       // Añade el nuevo ticket a la lista.
  //       this.listaDeTickets.push(this.nuevoTicket);
  
  //       // Incrementar el número de ticket para la siguiente entrada
  //       this.nuevoTicket.id_ticket = this.listaDeTickets.length + 1;
  
  //       // Incrementar puestoAsignado para el siguiente ticket, solo si es menor que 10
  //       if (this.nuevoTicket.puestoAsignado < 10) {
  //         this.nuevoTicket.puestoAsignado++;
  //       } else {
  //         console.warn("Todos los puestos están ocupados.");
  //       }
  //     },
  //     error => {
  //       console.error("Error al guardar el ticket:", error);
  //     }
  //   );
  
  //   // Reinicializar nuevoTicket para la próxima entrada.
  //   this.nuevoTicket = new Ticket();
  //   this.nuevoTicket.puestoAsignado = this.listaDeTickets.length % 10 + 1;
  // }

  guardarTicket(): void {
    console.log(this.vehiculo.placa);
    this.nuevoTicket.vehiculo.placa = this.vehiculo.placa;
    this.nuevoTicket.vehiculo.tipo_vehiculo = this.vehiculo.tipo_vehiculo;
  
    if (this.nuevoTicket.fecha) {
      this.nuevoTicket.fecha = this.datePipe.transform(this.nuevoTicket.fecha, 'yyyy-MM-dd') || '';
    } else {
      this.nuevoTicket.fecha = '';
    }


    if (this.puestosTotales > 0) {
      this.puestosTotales--;
      // Luego continúa con la lógica de guardar el ticket...
    } else {
      alert('No hay puestos disponibles.');
    }

    const date = new Date();
    const formattedTime = format(date, 'HH:mm:ss');
    
    this.nuevoTicket.hora_entrada = formattedTime;
    this.nuevoTicket.hora_salida = formattedTime;
 
    this.ticketService.save(this.nuevoTicket).subscribe(
      data => {
        console.log("resultado WS save", data);
  
        // Añade el nuevo ticket a la lista.
        this.listaDeTickets.push(this.nuevoTicket);
  
        // Incrementar el número de ticket para la siguiente entrada
        this.nuevoTicket.id_ticket = this.listaDeTickets.length + 1;
  
        // Incrementar puestoAsignado para el siguiente ticket, solo si es menor que 10
        if (this.nuevoTicket.puestoAsignado < 10) {
          this.nuevoTicket.puestoAsignado++;
        } else {
          console.warn("Todos los puestos están ocupados.");
        }
      },
      error => {
        console.error("Error al guardar el ticket:", error);
      }
    );
  
    // Reinicializar nuevoTicket para la próxima entrada.
    this.nuevoTicket = new Ticket();
    this.nuevoTicket.puestoAsignado = this.listaDeTickets.length % 10 + 1;
  }

  generarNumeroTicket(): void {
    const ultimoNumeroTicket = this.listaDeTickets.length ;
    this.nuevoTicket.id_ticket = ultimoNumeroTicket + 1;
  }

  /*/getTipoVehiculoByPlaca(event: any): void {
    const placa = event.target.value;
    if (placa) {
      const vehiculoEncontrado = this.vehiculoService.obtenerVehiculoPorPlaca(placa);
      this.tipoVehiculoAutomatico = vehiculoEncontrado ? vehiculoEncontrado.tipo_vehiculo : '';
    }
  }/*/
  
  buscarTipoVehiculo() {
    const placaIngresada = this.nuevoTicket.vehiculo.placa.trim().toUpperCase(); // Normalizar la placa ingresada
    const vehiculoEncontrado = this.listaDeVehiculos.find(vehiculo => vehiculo.placa.trim().toUpperCase() === placaIngresada);
  
    if (vehiculoEncontrado) {
      this.nuevoTicket.vehiculo.tipo_vehiculo = vehiculoEncontrado.tipo_vehiculo; // Corregir el nombre de la propiedad aquí
    } else {
      // Si no se encontró un vehículo con la placa ingresada, puedes mostrar un mensaje de error o dejar el campo en blanco
      this.nuevoTicket.vehiculo.tipo_vehiculo = ''; // Corregir el nombre de la propiedad aquí
      console.log('Vehículo no encontrado');
    }
  }
  
  onOptionSelected(event: MatAutocompleteSelectedEvent) {
    const selectedVehicle = this.listaDeVehiculos.find(vehicle => vehicle.placa === event.option.value);
    if (selectedVehicle) {
      this.vehiculo.placa = selectedVehicle.placa;
      this.vehiculo.tipo_vehiculo = selectedVehicle.tipo_vehiculo;
      this.vehiculo.color = selectedVehicle.color;
    }
  }
}