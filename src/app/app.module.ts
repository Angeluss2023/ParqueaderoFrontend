import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './template/header/header.component';
import { PrincipalComponent } from './template/principal/principal.component';
import { HistorialComponent } from './template/historial/historial.component';
import { MenuComponent } from './template/menu/menu.component';
import { CostoComponent } from './template/costo/costo.component';
import { TicketComponent } from './template/ticket/ticket.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { FirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import {MatSelectModule} from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PrincipalComponent,
    HistorialComponent,
    MenuComponent,
    CostoComponent,
    TicketComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    FirestoreModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatMomentDateModule,
    HttpClientModule,
    DatePipe,
    MatSelectModule,
    MatAutocompleteModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore())
  ],
  providers: [DatePipe,
    {provide: FIREBASE_OPTIONS, useValue: environment.firebase},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
