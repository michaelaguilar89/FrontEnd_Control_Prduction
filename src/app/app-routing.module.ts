import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUpdateProductionComponent } from './components/create-update-production/create-update-production.component';
import { DeleteProductionComponent } from './components/delete-production/delete-production.component';
import { ListProductionComponent } from './components/list-production/list-production.component';

const routes: Routes = [
  {path:'list',component:ListProductionComponent},
  {path:'create',component:CreateUpdateProductionComponent},
  {path:'update',component:CreateUpdateProductionComponent},
  {path:'delete',component:DeleteProductionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
