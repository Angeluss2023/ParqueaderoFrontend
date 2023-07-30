import { Component } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { Vehiculo } from 'src/app/domain/vehiculo';
import { VehiculoService } from 'src/app/services/vehiculo.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.scss']
})

export class HistorialComponent {
  fechaSeleccionada: Date | null = null;
  vehiculosPorFecha: Vehiculo[] = [];
  displayedColumns: string[] = ['placa', 'tipoVehiculo', 'fecha', 'horaEntrada', 'horaSalida', 'lugar'];
  dataSource: MatTableDataSource<Vehiculo>;

  constructor(private vehiculoService: VehiculoService) {
    this.dataSource = new MatTableDataSource<Vehiculo>([]);
  }

  
}