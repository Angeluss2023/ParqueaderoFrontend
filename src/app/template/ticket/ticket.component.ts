import { Component } from '@angular/core';
import { Ticket } from 'src/app/domain/ticket';
import { VehiculoService } from 'src/app/services/vehiculo.service';
import { TicketService } from 'src/app/services/ticket.service';
import {  OnInit } from '@angular/core';
import { Vehiculo } from 'src/app/domain/vehiculo';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';

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
  
  constructor(private vehiculoService: VehiculoService, private ticketService: TicketService, private router: Router,private datePipe: DatePipe) {
    let params = this.router.getCurrentNavigation()?.extras.queryParams;
    if(params){
      console.log(params)
      this.nuevoTicket = new Ticket()
      this.nuevoTicket = params['Ticket']
    }
  }

  ngOnInit(): void {
    this.listaDeTickets = this.vehiculoService.obtenerListaDeTickets();

  }

  // guardarTicket(): void {
  //    this.generarNumeroTicket();
  //  console.log('Nuevo ticket generado:', this.nuevoTicket);
  //     this.listaDeTickets.push(this.nuevoTicket);
  //     this.nuevoTicket = new Ticket(); 
  //    this.ticketService.save(this.nuevoTicket).subscribe(data => {
  //    console.log("resultado WS save", data);
  //  });
  //  this.nuevoTicket = new Ticket()
  // }

   guardarTicket(): void {
      this.generarNumeroTicket();

       if (this.nuevoTicket.fecha) {
       this.nuevoTicket.fecha = this.datePipe.transform(this.nuevoTicket.fecha, 'yyyy-MM-dd') || '';
       } else {
         this.nuevoTicket.fecha = '';
    }
    // Obtenemos la hora actual usando el objeto Date
    const date = new Date();
  
    this.nuevoTicket.hora_entrada=date.toLocaleTimeString();
    this.nuevoTicket.hora_salida=date.toLocaleTimeString();
    console.log(this.nuevoTicket.hora_entrada)

    this.listaDeTickets.push(this.nuevoTicket);
    console.log('Nuevo ticket generado:', this.nuevoTicket);
    this.ticketService.save(this.nuevoTicket).subscribe(
         data => {
           console.log("resultado WS save", data);
         },
         error => {
         console.error("Error al guardar el ticket:", error);
       }
      );
  
     this.nuevoTicket = new Ticket();
   }

  generarNumeroTicket(): void {
    const ultimoNumeroTicket = this.listaDeTickets.length > 0 ? this.listaDeTickets[this.listaDeTickets.length - 1].idticket : 0;

    this.nuevoTicket.idticket = ultimoNumeroTicket + 3;
  }

  //vehiculos

  // getTipoVehiculoByPlaca(event: Event): void {
  //   const inputElement = event.target as HTMLInputElement;
  //   const placa = inputElement.value;
  //   const vehiculoEncontrado = this.vehiculoService.obtenerVehiculoPorPlaca(placa);
  //   this.tipoVehiculoAutomatico = vehiculoEncontrado ? vehiculoEncontrado.tipo : '';
  // }

  getTipoVehiculoByPlaca(event: any): void {
    const placa = event.target.value;
    if (placa) {
      const vehiculoEncontrado = this.vehiculoService.obtenerVehiculoPorPlaca(placa);
      this.tipoVehiculoAutomatico = vehiculoEncontrado ? vehiculoEncontrado.tipo_vehiculo : '';
    }
  }
  //cancelar

  seleccionarTicket(ticket: Ticket): void {
    this.ticketService.setTicketACancelar(ticket);
  }
}