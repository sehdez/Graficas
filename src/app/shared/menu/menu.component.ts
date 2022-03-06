import { Component, OnInit } from '@angular/core';

interface MenuItem{
  ruta : string,
  texto: string
}


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [`
    ul{
      cursor:pointer;
    }
  `]
})
export class MenuComponent implements OnInit {

  items: MenuItem[]=[
    {
      ruta : '/graficas/barras',
      texto: 'Barras'
    },
    {
      ruta : '/graficas/barras-doble',
      texto: 'Dobles'
    },
    {
      ruta : '/graficas/dona',
      texto: 'Dona'
    },
    {
      ruta : '/graficas/dona-http',
      texto: 'Dona HTTP'
    }
  ]

  constructor() { }



  ngOnInit(): void {
  }

}
