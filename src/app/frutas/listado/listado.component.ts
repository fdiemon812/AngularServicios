import { Component, OnInit } from '@angular/core';
import { Fruta } from '../interface/frutas.interface';
import { FrutasService } from '../services/frutas.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  constructor(private frutaService:FrutasService) {

    

   }
  
  ngOnInit(): void {
  }



  // getArrayFrutas():Fruta[] {

  //   return this.frutaService.getListadoFrutas;
  // }
  get listaFrutas():Fruta[]{
    return this.frutaService.getListadoFrutas;
  }
  

}
