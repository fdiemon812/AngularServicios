import { Component, OnInit } from '@angular/core';
import { FrutasService } from '../services/frutas.service';
import { TotalService } from '../services/total.service';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.css']
})
export class TotalComponent implements OnInit {

  constructor(private ts:TotalService, private fs:FrutasService) { }

  ngOnInit(): void {
  }




  get totalCantidades():number{
    return this.ts.sumaCantidades(this.fs.getListadoFrutas);
  }



}
