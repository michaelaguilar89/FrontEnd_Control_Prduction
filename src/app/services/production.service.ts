import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Consumo } from 'src/models/consumo';
import { Observable,BehaviorSubject } from 'rxjs';
import { getLocaleDateFormat } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ProductionService {
 
  myappurl:string ="https://localhost:5001/api/Production/";
 //  myappurl:string="https://webapicontrolproduction.azurewebsites.net/api/Production/";
  lista:any;
  private updateForm= new BehaviorSubject<Consumo>({ } as any)
  option='';
  recordupdate:any=[];

  constructor(private http:HttpClient) { }

  getConsumo(){
     this.http.get(this.myappurl).toPromise().then(data=>{
     this.lista=data
    })
  }
  getConsumobyDate(fecha:string){
   return this.http.get(this.myappurl+fecha).toPromise().then(data=>{
      this.lista=data;
    })
  }
  addConsumo(consumo:Consumo):Observable<Consumo>{
    return this.http.post<Consumo>(this.myappurl,consumo);
  }

  updateConsumo(consumo:Consumo):Observable<Consumo>{
    return this.http.put<Consumo>(this.myappurl,consumo);
  }
  removeConsumo(id:number):Observable<Consumo>{
    return this.http.delete<Consumo>(this.myappurl+id);
  }
  getDate(){
   var date = new Date().toLocaleDateString();
   return date;
  }

  getFormData$():Observable<Consumo>{
    return this.updateForm.asObservable();
  }

  update(consumo:Consumo){
   return this.updateForm.next(consumo);
  }
}
