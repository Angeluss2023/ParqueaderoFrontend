import { Component } from '@angular/core';
import { VehiculoService } from 'src/app/services/vehiculo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Vehiculo } from 'src/app/domain/vehiculo';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})

export class PrincipalComponent {

  vehiculo: Vehiculo = new Vehiculo();
  
  constructor(private vehiculoService: VehiculoService,
    private router: Router) {

      let params = this.router.getCurrentNavigation()?.extras.queryParams;
      if(params){
        console.log(params)
        this.vehiculo = new Vehiculo()
        this.vehiculo = params['vehiculo']
      }
    }

  guardar() {
    console.log(this.vehiculo)
    // antes firebase --> this.contactoService.save(this.contacto)
    this.vehiculoService.save(this.vehiculo).subscribe(data => {
      console.log("resultado WS save", data);
     // alert ("Vehiculo guardado correctamente")

    });
    this.vehiculo = new Vehiculo()
  }
}
