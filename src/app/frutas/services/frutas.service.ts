import { Injectable } from "@angular/core";
import { Fruta } from "../interface/frutas.interface";

@Injectable() export class FrutasService{

    private _frutas: Fruta[]=[];

    constructor(){
        console.log("Servicio iniciado");
    }


    agregarFruta(fruta: Fruta){
        console.log("usando servicio ADD")
        this._frutas.push(fruta)
    
      }


    get getListadoFrutas():Fruta[]{
        console.log("usando servicio GET")
        return [...this._frutas]
    }

}