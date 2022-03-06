import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Redes } from '../interfaces/redes.interface';

@Injectable({
  providedIn: 'root'
})
export class GraficasService {

  constructor( private http:HttpClient ) { 

  }

  infoRedes(){
    return this.http.get<Redes>('https://graficas-3b806-default-rtdb.firebaseio.com/grafica.json');
  }
}
