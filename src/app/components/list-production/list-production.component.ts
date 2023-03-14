import { Component } from '@angular/core';
import { Consumo } from 'src/models/consumo';
import { ProductionService } from 'src/app/services/production.service';
import { FormGroup,FormBuilder ,Validators} from '@angular/forms';
import { Router, TitleStrategy } from '@angular/router';
import { ToastrService} from 'ngx-toastr';
@Component({
  selector: 'app-list-production',
  templateUrl: './list-production.component.html',
  styleUrls: ['./list-production.component.css']
})
export class ListProductionComponent {
  form:FormGroup;
  id:number=0;
  list:any;
  count:number=0;
  title='';

  constructor(public service:ProductionService,
              private fb:FormBuilder,
              private route:Router,
              private toastr:ToastrService
              
              ){
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
   
 //this.getByDate();
 this.getAll();



}//end of ngOnInit 

 getByDate(){
  var a= this.form.get('searchDate')?.value;

 // alert('fecha de busqueda : '+a);
   this.service.getConsumobyDate(a);
 this.list= this.service.lista.result;
 console.log("GetByDate  : "+this.list);
}
  getAll(){
  
    this.service.getConsumo();
    
   
   console.log("GetAll : "+this.service.lista.result);
  


  }
  new(){
    this.service.option="new";
    this.route.navigate(['create']);
  }

  edit(product:Consumo){
    this.service.option="edit";
    this.service.update(product);
    this.route.navigate(['update']);
  }

   set(product:Consumo){
    
    //console.log(product);
    this.service.recordupdate=product;
    console.log(this.service.recordupdate);
   }

   setRemove(product:Consumo){
    this.title='Delete Record';
    //console.log(product);
    this.service.recordupdate=product;
    console.log(this.service.recordupdate);
   }

   
   setDetails(product:Consumo){
    
    //console.log(product);
    this.title='Details Record';
    this.service.recordupdate=product;
    console.log(this.service.recordupdate);
   }
  remove(){

      this.service.removeConsumo(this.service.recordupdate.id).subscribe(data=>{
      this.toastr.warning('Record deleted','The record was deleted');
      window.location.reload();
     
    },(errorData)=>this.toastr.error('Error ' ,'Error on App'))
    
  }
}