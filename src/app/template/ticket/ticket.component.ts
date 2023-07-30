import { Component } from '@angular/core';
import { Ticket } from 'src/app/domain/ticket';
import { VehiculoService } from 'src/app/services/vehiculo.service';
import { TicketService } from 'src/app/services/ticket.service';
import {  OnInit } from '@angular/core';
import { Vehiculo } from 'src/app/domain/vehiculo';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})

export class TicketComponent implements OnInit{

  nuevoTicket: Ticket = new Ticket(); // Creas una instancia de Ticket vacía para almacenar el nuevo ticket
  listaDeVehiculos: Vehiculo[] = [];
  tipoVehiculoAutomatico = '';
  listaDeTickets: Ticket[] = [];

  constructor(private vehiculoService: VehiculoService, private ticketService: TicketService, private router: Router) {
    let params = this.router.getCurrentNavigation()?.extras.queryParams;
    if(params){
      console.log(params)
      this.nuevoTicket = new Ticket()
      this.nuevoTicket = params['Ticket']
    }
  }

  

  ngOnInit(): void {
    // Aquí debes llamar a tu servicio para obtener la lista de tickets
    // y asignarla a la propiedad listaDeTickets
    this.listaDeTickets = this.vehiculoService.obtenerListaDeTickets();
  }

  generarNumeroTicket(): void {
    // Obtenemos el número de ticket actual del último ticket registrado
    const ultimoNumeroTicket = this.listaDeTickets.length > 0 ? this.listaDeTickets[this.listaDeTickets.length - 1].numeroTicket : 0;

    // Incrementamos el número del último ticket para generar el siguiente número de ticket
    this.nuevoTicket.numeroTicket = ultimoNumeroTicket + 1;
  }

   guardarTicket(): void {
     this.generarNumeroTicket();
     console.log('Nuevo ticket generado:', this.nuevoTicket);
     this.listaDeTickets.push(this.nuevoTicket);
     this.nuevoTicket = new Ticket(); 
     this.ticketService.save(this.nuevoTicket).subscribe(data => {
      console.log("resultado WS save", data);
    });
    this.nuevoTicket = new Ticket()
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
      this.tipoVehiculoAutomatico = vehiculoEncontrado ? vehiculoEncontrado.tipo : '';
    }
  }

  //cancelar

  seleccionarTicket(ticket: Ticket): void {
    this.ticketService.setTicketACancelar(ticket);
  }
  
  
}
