import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { enviroments } from 'src/environments/environments';
import { Observable, catchError, of } from 'rxjs';
import { Data, Hero, Info } from '../interfaces/hero.interface';



@Injectable({
  providedIn: 'root'
})
export class UniverseService {

  // llamamos la base url
  private baseUrl: string = enviroments.baseUrl;

  // llamamos la api key
  private apiKey: string = enviroments.apiKey


  // Inyectamos el httpClient
  constructor( private http: HttpClient ) { }

  /**
   *  Este metodo nos permite obtener la info del heroe
   * @param name => el nombre del heroe que requiere la info
   * @returns Retornamos un observable
   */
  public getHeroByName( name: string ): Observable< Info>{
    return this.http.get<Info>(`${this.baseUrl}${name}${this.apiKey}`)
  }






}
