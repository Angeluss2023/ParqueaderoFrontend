import { Vehiculo } from "./vehiculo";
export class Costo {
  id_ticket: number = 1;
    hora_Entrada: string =''; 
    hora_Salida: Date = new Date();
    placa: string = '';
    tipo_vehiculo: string = '';
    puestoAsignado: string = '';
    costo: string = ''; 
}