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

  getList(){
    return this.tickets
  }

  create(ticket: Ticket): any {
    return this.contactosRef.doc(ticket.id_ticket.toString()).set({ ...ticket });
  }


  save(ticket: Ticket) {
    console.log(ticket)
    return this.http.post<any>("http://localhost:8080/Parqueadero/rs/ticket/ticket1", ticket).pipe(
      catchError(error => {
        console.error("Error al guardar el ticket:", error);
        return throwError("Hubo un error al guardar el ticket. Por favor, inténtalo de nuevo más tarde.");
      })
    );
  }
  
  getAll(fecha?: Date): Observable<Ticket[]> {
    if (fecha) {
      const fechaStr = this.formatDate(fecha);
      return this.http.get<Ticket[]>(`http://localhost:8080/Parqueadero/rs/ticket/fecha/${fechaStr}`);
    } else {
      return this.http.get<Ticket[]>("http://localhost:8080/Parqueadero/rs/ticket/allT");
    }
  }
  
  
  private formatDate(date: Date): string {
    return date.toISOString().slice(0, 10);
  }

    ticketACancelar: Ticket = new Ticket();
  
    setTicketACancelar(ticket: Ticket): void {
      this.ticketACancelar = ticket;
    }
  
    getTicketACancelar(): Ticket {
      return this.ticketACancelar;
    }

  formatoHora(hora: Date): string {
    return hora.toTimeString().slice(0, 8);
  }
}