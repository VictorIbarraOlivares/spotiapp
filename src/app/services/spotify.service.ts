import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(
    private http: HttpClient
  ) {
    console.log('SpotifyService Listo');
  }

  getQuery( query:string ) {
    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      'Authorization' : 'Bearer BQDi-IO2MUmr7b1iNvHGO-7y4r60ZVUURPvAJgqQo5FJCMAhgunuqqBD4I1kEhIRoJR8pxj4QzlG66iXg10'
    });

    return this.http.get(url, { headers });
  }

  getNewReleases() {
    /*
    const headers = new HttpHeaders({
      'Authorization' : 'Bearer BQDXE1ST35mTN4Pg0RXTkdMV2kAaF-knobeP3O4XWUssQzeoylpK1-6bI2sy1qAlZQl9TmApr3IyMFh14E0'
    });

    //return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers });
    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers })
               .pipe( map( data =>  data['albums'].items ) );
    */

   return this.getQuery('browse/new-releases?limit=20')
              .pipe( map( data =>  data['albums'].items ) );
  }

  getArtistas( termino: string ) {
    /*
    const headers = new HttpHeaders({
      'Authorization' : 'Bearer BQDXE1ST35mTN4Pg0RXTkdMV2kAaF-knobeP3O4XWUssQzeoylpK1-6bI2sy1qAlZQl9TmApr3IyMFh14E0'
    });

    return this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist&limit=15`, { headers })
               .pipe( map( ( data:any ) => {
                 return data.artists.items;
               }) );
    */

    return this.getQuery(`search?q=${ termino }&type=artist&limit=15`)
               .pipe( map( ( data:any ) => {
                 return data.artists.items;
               }) );

  }

  getArtista( termino: string ) {

    return this.getQuery(`artists/${ termino }`);
               /*.pipe( map( ( data:any ) => {
                 //return data.artists.items;
               }) );
               */

  }

  getTopTracks( termino: string ) {

    return this.getQuery(`artists/${ termino }/top-tracks?country=us`)
               .pipe( map( ( data:any ) => {
                 return data.tracks;
               }) );


  }
}
