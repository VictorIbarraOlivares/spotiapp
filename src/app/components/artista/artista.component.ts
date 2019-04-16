import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent{
  artista: any = {}; //objeto
  topTracks: any [] = [];
  loading: boolean;
  constructor(
    private router: ActivatedRoute,
    private spotyfy: SpotifyService
  ) {
    this.loading = true;

    this.router.params.subscribe( params => {
      console.log(params);
      console.log(params['id']);

      this.getArtista( params['id'] );
      this.getTopTracks( params['id'] );

    });
  }

  getArtista(id:string) {
    this.loading = true;
    this.spotyfy.getArtista(id)
        .subscribe( artista => {
          console.log(artista);
          this.artista = artista;
          this.loading = false;
        });
  }

  getTopTracks(id:string) {
    this.spotyfy.getTopTracks(id)
        .subscribe( topTracks => {
          console.log(topTracks);
          this.topTracks = topTracks;
        });
  }

}
