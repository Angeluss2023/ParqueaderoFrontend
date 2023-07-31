//  export class Ticket {
//    numeroTicket: number = 0;
//    horaEntrada: Date = new Date(); 
//    fecha: string = '';
//    placa1: string = '';
//    tipoVehiculo: string = '';
//    lugarAsignado: string = '';
//  }

export class Ticket {
  idticket: number = 0; // Cambia a camelCase
  //horaEntrada: Date = new Date(); 
  hora_entrada:string =''; 
  hora_salida: string = ''; // Cambia a camelCase y actualiza el tipo a string
  puestoAsignado: number = 0; // Cambia a camelCase
  fecha: string = '';
  vehiculo: {
    color: string;
    idVehiculo: number; // Cambia a camelCase
    placa: string;
    tipoVehiculo: string; // Cambia a camelCase
  } = {
    color: '',
    idVehiculo: 0, // Cambia a camelCase
    placa: '',
    tipoVehiculo: '',
  };
}