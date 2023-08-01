import { Component } from '@angular/core';
import { Ticket } from 'src/app/domain/ticket';
import { VehiculoService } from 'src/app/services/vehiculo.service';
import { TicketService } from 'src/app/services/ticket.service';
import {  OnInit } from '@angular/core';
import { Vehiculo } from 'src/app/domain/vehiculo';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
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

   guardarTicket(): void {
      console.log(this.vehiculo.placa)
      this.nuevoTicket.vehiculo.placa=this.vehiculo.placa
      this.nuevoTicket.vehiculo.tipo_vehiculo=this.vehiculo.tipo_vehiculo
       if (this.nuevoTicket.fecha) {
       this.nuevoTicket.fecha = this.datePipe.transform(this.nuevoTicket.fecha, 'yyyy-MM-dd') || '';
       } else {
         this.nuevoTicket.fecha = '';
    }
    const date = new Date();
  
    this.nuevoTicket.hora_entrada=date.toLocaleTimeString();
    this.nuevoTicket.hora_salida=date.toLocaleTimeString();
    console.log(this.nuevoTicket.hora_entrada)

    this.listaDeTickets.push(this.nuevoTicket);
    console.log('Nuevo ticket generado:', this.nuevoTicket);
    this.ticketService.save(this.nuevoTicket).subscribe(
         data => {
           console.log("resultado WS save", data);

           setTimeout(() => {
            window.location.reload();
          }, 1000);
         },
         error => {
         console.error("Error al guardar el ticket:", error);
   
       }
      );
  
     this.nuevoTicket = new Ticket();

   }

  generarNumeroTicket(): void {
    const ultimoNumeroTicket = this.listaDeTickets.length ;
    this.nuevoTicket.idticket = ultimoNumeroTicket + 1;
  }

  getTipoVehiculoByPlaca(event: any): void {
    const placa = event.target.value;
    if (placa) {
      const vehiculoEncontrado = this.vehiculoService.obtenerVehiculoPorPlaca(placa);
      this.tipoVehiculoAutomatico = vehiculoEncontrado ? vehiculoEncontrado.tipo_vehiculo : '';
    }
  }
  
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