import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Consumo } from 'src/models/consumo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductionService {
 
  myappurl:string ="https://localhost:5001/api/Production/";
  list:any=[];

  constructor(private http:HttpClient) { }

  getConsumo(){
   return this.http.get(this.myappurl).toPromise().then(data=>{
      this.list=data 
    })
  }
  getConsumobyDate(fecha:string){
   return this.http.get(this.myappurl+fecha).toPromise().then(data=>{
      this.list=data;
    })
  }
  addConsumo(consumo:Consumo):Observable<Consumo>{
    return this.http.post<Consumo>(this.myappurl,consumo);
  }

  updateConsumo(consumo:Consumo):Observable<Consumo>{
    return this.http.put<Consumo>(this.myappurl,consumo);
  }

  getDate(){
   var date = new Date().toLocaleDateString();
   return date;
  }
}
