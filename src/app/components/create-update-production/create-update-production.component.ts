import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { Consumo } from 'src/models/consumo';
import { ProductionService } from 'src/app/services/production.service';
import { ToastrService} from 'ngx-toastr';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-create-update-production',
  templateUrl: './create-update-production.component.html',
  styleUrls: ['./create-update-production.component.css']
})
export class CreateUpdateProductionComponent implements OnInit {

  form:FormGroup;
  id=0;
  myConsumo:any;
  buttonName='Save';
  formName='Create Record';

  constructor(private fb:FormBuilder,
              private myService:ProductionService,
              private route:Router,
              private toastr:ToastrService
              ){
                this.form=this.fb.group({
                  id:0,
                  fecha:['',Validators.required],
                  tanque:['',Validators.required],
                  productoName:['',Validators.required],
                  lote:['',Validators.required],
                  cantidad:['',Validators.required],
                  horaInicio:['',Validators.required],
                  nivelFinal:['',Validators.required],
                  responsable:['',Validators.required],
                  comentario:['']
                })
            

  }//fin del constructor

  ngOnInit() {
    if(this.id==0){
          
    var date = new Date()
    var date2= date.toISOString().slice(0,10);
    var time=new Date().toLocaleTimeString();

    // console.log('date : '+date);
     // console.log('date2 : '+date2);
    //console.log('time : '+time);
    this.form.patchValue({
      fecha:date2,
      horaInicio:time,
      
    
    })
    }
  }

  action(){
   // if(this.id>=1){
     // this.updateConsumo();
    //}else{
      this.saveConsumo();
    //}
  }

  updateConsumo(){
    
    const consumo:Consumo={
      id:this.id,
      fecha:this.form.get('fecha')?.value,
      tanque:this.form.get('tanque')?.value,
      productoName:this.form.get('productoName')?.value,
      lote:this.form.get('lote')?.value,
      cantidad:this.form.get('cantidad')?.value,
      horaInicio:this.form.get('horaInicio')?.value,
      nivelFinal:this.form.get('nivelFinal')?.value,
      responsable:this.form.get('responsable')?.value,
      comentario:this.form.get('comentario')?.value
      
    }

   // this.myService.updateConsumo(consumo).subscribe(data=>{
     // this.toastr.info('Registro actualizado','El registro id :'+this.id+' se ha actulizado');
      this.route.navigate(['/list']);
    //}
    //,(errorData)=>this.toastr.error('Error :','Error on App')
    //)
  }
  saveConsumo(){
    console.log(this.form);
    var newdate= new Date(this.myService.getDate())
    const consumo:Consumo={
      fecha:this.form.get('fecha')?.value,
      tanque:this.form.get('tanque')?.value,
      productoName:this.form.get('productoName')?.value,
      lote:this.form.get('lote')?.value,
      cantidad:this.form.get('cantidad')?.value,
      horaInicio:this.form.get('horaInicio')?.value,
      nivelFinal:this.form.get('nivelFinal')?.value,
      responsable:this.form.get('responsable')?.value,
      comentario:this.form.get('comentario')?.value

    };
   
   console.log(consumo);
   this.myService.addConsumo(consumo).subscribe(data =>{
      
      
        this.toastr.success('Registro Agregado','El registro se ha guardado exitosamente ');
          this.route.navigate(['/list']);
    }
      ,(errorData)=>this.toastr.error('Error :','Error on App')
      
      )
  

}
}