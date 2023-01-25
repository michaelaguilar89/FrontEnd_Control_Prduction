import { Component, OnInit } from '@angular/core';
import { ProductionService } from 'src/app/services/production.service';
@Component({
  selector: 'app-delete-production',
  templateUrl: './delete-production.component.html',
  styleUrls: ['./delete-production.component.css']
})
export class DeleteProductionComponent implements OnInit {

  id=5;
  myrecord:any;
  
constructor(private service:ProductionService){

}

  ngOnInit(){
    this.myrecord=this.service.record;
  }
}
