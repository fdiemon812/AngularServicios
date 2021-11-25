import { Injectable } from "@angular/core";
import { Fruta } from "../interface/frutas.interface";


@Injectable() export class TotalService{


    constructor(){
        console.log("Servicio TOTAL");

    }


    sumaCantidades(listaFrutas:Fruta[]){

        let sumaCantidades=0;
        listaFrutas.forEach(fruta => {

            sumaCantidades=sumaCantidades+fruta.cantidad;

        });


        return sumaCantidades;
    }

    


}