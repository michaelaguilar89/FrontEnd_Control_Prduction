import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUpdateProductionComponent } from './components/create-update-production/create-update-production.component';
import { ListProductionComponent } from './components/list-production/list-production.component';

const routes: Routes = [
  {path:'list',component:ListProductionComponent},
  {path:'create',component:CreateUpdateProductionComponent},
  {path:'update',component:CreateUpdateProductionComponent},
 
  {path:'',redirectTo:'list',pathMatch:'full'},
  {path:'**',redirectTo:'list',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
