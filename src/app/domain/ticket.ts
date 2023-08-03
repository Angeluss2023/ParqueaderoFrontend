import { Vehiculo } from "./vehiculo";
// export class Ticket {
//   idticket: number = 1; 
//   //horaEntrada: Date = new Date(); 
//   hora_entrada:string =''; 
//   hora_salida: string = ''; 
//   puestoAsignado: number = 0;
//   fecha: string = '';

//   //vehiculo?: Vehiculo;
//   vehiculo: {
//     color: string;
//     idVehiculo: number;
//     placa: string;
//     tipo_vehiculo: string; 
//   } = {
//     color: '',
//     idVehiculo: 0, 
//     placa: '',
//     tipo_vehiculo: '',
//   };
// }

export class Ticket {
 id_ticket: number = 1; 
  //horaEntrada: Date = new Date(); 
  hora_entrada:string =''; 
  hora_salida: string = ''; 
  puestoAsignado: number = 1;
  fecha: string = '';
  // ...otros campos que ya tienes en tu clase...
  cerrado: boolean;

  constructor() {
    this.cerrado = false;
  }
  //vehiculo?: Vehiculo;
  vehiculo: {
    color: string;
    idVehiculo: number;
    placa: string;
    tipo_vehiculo: string; 
  } = {
    color: '',
    idVehiculo: 0, 
    placa: '',
    tipo_vehiculo: '',
  };
}