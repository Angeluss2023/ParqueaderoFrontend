import { Injectable } from '@angular/core';
import { Ticket } from '../domain/ticket';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';  // Agrega 'throwError' aquí
import { catchError } from 'rxjs/operators';  

@Injectable({
  providedIn: 'root'
})

export class TicketService {

  private dbPath = '/contactos'; 
  tickets: Ticket[] = []

  contactosRef: AngularFirestoreCollection<Ticket>;

  constructor(private db: AngularFirestore, private http: HttpClient) {
    this.contactosRef = db.collection(this.dbPath);
  }

   /*/save1(ticket: Ticket){
     this.tickets.push(ticket)
     console.log(this.tickets)
     //contacto.uid = this.db.createId()
     this.create(ticket)
   }/*/

  getList(){
    return this.tickets
  }

  create(ticket: Ticket): any {
    return this.contactosRef.doc(ticket.id_ticket.toString()).set({ ...ticket });
  }
  
  
  /*getAll() {
    return this.contactosRef.valueChanges();
  }

  create(ticket: Ticket): any {
    //return this.contactosRef.doc(contacto.uid).set({ ...contacto });
  }

  update(id: string, data: any): Promise<void> {
    return this.contactosRef.doc(id).update(data);
  }

  delete(id: string): Promise<void> {
    return this.contactosRef.doc(id).delete();
  }*/

  //postman

  // save(ticket: Ticket) {
  //   return this.http.post<any>("http://localhost:8080/Parqueadero/rs/ticket/ticket1", ticket)
  // } 

  save(ticket: Ticket) {
    console.log(ticket)
    return this.http.post<any>("http://localhost:8080/Parqueadero/rs/ticket/ticket1", ticket).pipe(
      catchError(error => {
        console.error("Error al guardar el ticket:", error);
        return throwError("Hubo un error al guardar el ticket. Por favor, inténtalo de nuevo más tarde.");
      })
    );
  }
  

  // getAll(){
  //   return this.http.get<any>("http://localhost:8080/Parqueadero/rs/ticket/allT")
  // }
  
  getAll(fecha?: Date): Observable<Ticket[]> {
    if (fecha) {
      const fechaStr = this.formatDate(fecha);
      return this.http.get<Ticket[]>(`http://localhost:8080/Parqueadero/rs/ticket/fecha`);
    } else {
      return this.http.get<Ticket[]>("http://localhost:8080/Parqueadero/rs/ticket/allT");
    }
  }
  
  private formatDate(date: Date): string {
    return date.toISOString().slice(0, 10);
  }

  
  //ver ticket a cancelar 
    ticketACancelar: Ticket = new Ticket();
  
    setTicketACancelar(ticket: Ticket): void {
      this.ticketACancelar = ticket;
    }
  
    getTicketACancelar(): Ticket {
      return this.ticketACancelar;
    }
  
    // obtenerTicketPorNumero(numeroTicket: number): Ticket | undefined {
        //return { numeroTicket, fecha: fechaActual, horaEntrada: new Date(), placa: 'ABC123', tipoVehiculo: 'Auto', lugarAsignado: 'A1' };
   // }

  formatoHora(hora: Date): string {
    return hora.toTimeString().slice(0, 8);
  }
}