import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';
/* Ejemplo HttpClient
import { HttpClient } from '@angular/common/http';
*/
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {
  /* Ejemplo HttpClient
  paises:any[] = [];
  constructor(
    private http: HttpClient
  ) {
    console.log("constructor del home realizado");
    this.http.get('https://restcountries.eu/rest/v2/lang/es')
        .subscribe( (resp: any) =>{
            this.paises = resp;
            console.log(resp);
        });
  }
  */

  nuevosLanzamientos: any[] = [];
  loading: boolean;

  error: boolean = false;
  mensajeError: string = "";

  constructor( private spotify: SpotifyService) {
    this.loading = true;
    this.error = false;

    this.spotify.getNewReleases()
        .subscribe( (data: any) => {
          //console.log(data);
          this.nuevosLanzamientos = data;
          this.loading = false;
        }, ( errorServicio ) => {
          console.log(errorServicio.error.error.message);
          this.error = true;
          this.loading = false;
          this.mensajeError = errorServicio.error.error.message;
        });

  }


}
