import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent {

  @Input() items: any[] = [];
  constructor(
    private router:Router
  ) { }

  verArtista(lanzamiento:any) {
    console.log(lanzamiento);
    let artistaId;

    if (lanzamiento.type === 'artist') {
      artistaId = lanzamiento.id;
    } else {
      artistaId = lanzamiento.artists[0].id;
    }

    //console.log(artistaId);
    this.router.navigate([ '/artist' , artistaId ]);
  }

}
