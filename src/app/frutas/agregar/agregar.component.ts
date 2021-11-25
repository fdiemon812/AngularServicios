import { Component, OnInit } from '@angular/core';
import { FrutasService } from '../services/frutas.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  constructor(private frutaService: FrutasService) { }

  ngOnInit(): void {
  }


  nuevaFruta ={
    nombre: "",
    cantidad: 0

  }

  agregar(){
    this.frutaService.agregarFruta(this.nuevaFruta);

    this.nuevaFruta ={
      nombre: "",
      cantidad: 0
  
    }  }

}
