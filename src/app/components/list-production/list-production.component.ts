import { Component } from '@angular/core';
import { Consumo } from 'src/models/consumo';
import { ProductionService } from 'src/app/services/production.service';
import { FormGroup,FormBuilder ,Validators} from '@angular/forms';
@Component({
  selector: 'app-list-production',
  templateUrl: './list-production.component.html',
  styleUrls: ['./list-production.component.css']
})
export class ListProductionComponent {
  form:FormGroup;

  constructor(public service:ProductionService,
              private fb:FormBuilder){
      this.form=this.fb.group({
        searchDate:['',Validators.required]
    })

}
  
ngOnInit():void{
  var date=new Date();
  var today= date.toDateString();
  var time = date.toTimeString();
  
   var fecha=new Date(today);
   console.log('today : '+today);
   console.log('fecha : '+fecha);
 this.service.getConsumobyDate(today);

}  getByDate(){
  var a= this.form.get('searchDate')?.value;
  alert('fecha de busqueda : '+a);
   this.service.getConsumobyDate(a);
  console.log(this.service.list.result);
  console.log('DisplayMessages:'+this.service.list.DisplayMessage)

}
  getAll(){
    this.service.getConsumo();
    console.log(this.service.list.result);

  }
  new(){

  }

  edit(product:Consumo){

  }

}