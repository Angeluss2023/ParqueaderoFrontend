// export class Vehiculo {
//     placa: string = '';
//     tipo_vehiculo: string = '';
//     color: string = '';  
// }
import { Ticket } from "./ticket";
export class Vehiculo {
    placa: string = '';
    tipo_vehiculo: string = '';
    color: string = '';  
    ticket?: Ticket;
}