import { Injectable } from '@angular/core';
import { Vehiculo } from '../domain/vehiculo';
import { Ticket } from '../domain/ticket';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
  import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class VehiculoService {

  constructor(private http: HttpClient) { }

  vehiculos: Vehiculo[] = []

  private listaDeTickets: Ticket[] = [];
 private listaDeVehiculos: Vehiculo[] = [
   
  ];

  //postman**********************************************************************
  
  save(vehiculo: Vehiculo) {
    return this.http.post<any>("http://localhost:8080/Parqueadero/rs/ticket/vehiculo", vehiculo)
  }

  getAll(){
    return this.http.get<any>("http://localhost:8080/Parqueadero/rs/ticket/allV")
  }

  getAllT(){
    return this.http.get<any>("http://localhost:8080/Parqueadero/rs/ticket/allT")
  }
  
  delete(placa: string) {
    console.log(placa)
    const url = `http://localhost:8080/Parqueadero/rs/ticket/eliminar`;
    const options = {
      body: { placa }
    };
    console.log('eliminar')
    console.log(options)
    return this.http.delete<any>(url,options);
  }

  update(id: number, ticket: Ticket) {
    return this.http.put<any>("http://localhost:8080/Parqueadero/rs/ticket/actualizar",ticket);
  }

  // listarVehiculos**********************************************************************************

  obtenerListaDeTickets(): Ticket[] {
    return this.listaDeTickets;
  }

  obtenerVehiculoPorPlaca(placa: string): Vehiculo | null {
    const vehiculoEncontrado = this.listaDeVehiculos.find((v: Vehiculo) => v.placa === placa);
    console.log(vehiculoEncontrado); // Mueve esta línea antes del return
    return vehiculoEncontrado ? vehiculoEncontrado : null;
  }
  
  obtenerListaDeVehiculos(): Vehiculo[] {
    return this.listaDeVehiculos;
  }
  

  //historial****************************************************************************

}