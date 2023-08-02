import { Component, OnInit } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { Vehiculo } from 'src/app/domain/vehiculo';
import { VehiculoService } from 'src/app/services/vehiculo.service';
import { MatTableDataSource } from '@angular/material/table';
import { Ticket } from 'src/app/domain/ticket';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.scss']
})

export class HistorialComponent implements OnInit{
  fechaSeleccionada: Date | null = null;
  //fechaSeleccionada: Date | undefined; 
  vehiculosPorFecha: Vehiculo[] = [];
  displayedColumns: string[] = ['placa', 'tipoVehiculo', 'fecha', 'horaEntrada', 'horaSalida', 'lugar'];
  dataSource: MatTableDataSource<Vehiculo>;

  // constructor(private vehiculoService: VehiculoService) {
  //   this.dataSource = new MatTableDataSource<Vehiculo>([]);
  // }

  constructor(private vehiculoService: VehiculoService, private ticketService: TicketService) {
    this.dataSource = new MatTableDataSource<Vehiculo>([]);
  }
  ngOnInit(): void {
    this.actualizarHistorial();
  }

  actualizarHistorial(): void {
    this.ticketService.getAll().subscribe((tickets: Ticket[]) => {
      this.vehiculoService.getAll().subscribe((vehiculos: Vehiculo[]) => {
        // Combina los vehículos y tickets para tener toda la información en un solo lugar
        this.vehiculosPorFecha = this.combineVehiculosYTickets(vehiculos, tickets);

        // Filtra los vehículos por la fecha seleccionada
        if (this.fechaSeleccionada) {
          this.vehiculosPorFecha = this.vehiculosPorFecha.filter(vehiculo =>
            vehiculo.ticket && vehiculo.ticket.fecha === this.formatDate(this.fechaSeleccionada)
          );
        }

        // Actualiza el dataSource para la tabla con los vehículos filtrados
        this.dataSource.data = this.vehiculosPorFecha;
      });
    });
  }

  combineVehiculosYTickets(vehiculos: Vehiculo[], tickets: Ticket[]): Vehiculo[] {
    // Combina los vehículos y tickets usando la propiedad 'placa' como clave para relacionarlos
    return vehiculos.map(vehiculo => ({
      ...vehiculo,
      ticket: tickets.find(ticket => ticket.vehiculo.placa === vehiculo.placa)
    }));
  }

  formatDate(date: Date | null): string {
    // Función para formatear la fecha a formato 'YYYY-MM-DD' para hacer la comparación
    if (date) {
      return date.toISOString().slice(0, 10);
    }
    return '';
  }

  onFechaSeleccionada(event: any): void {
    this.actualizarHistorial();
  }

  onFechaKeyPress(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      this.actualizarHistorial();
    }
  }
}


