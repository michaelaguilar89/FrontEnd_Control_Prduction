import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { HeaderComponent } from './components/header/header.component';
import { ListProductionComponent } from './components/list-production/list-production.component';
import { CreateUpdateProductionComponent } from './components/create-update-production/create-update-production.component';
import { DeleteProductionComponent } from './components/delete-production/delete-production.component';
import { GetByIdProductionComponent } from './components/get-by-id-production/get-by-id-production.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
   // HeaderComponent,
    ListProductionComponent,
    CreateUpdateProductionComponent,
    DeleteProductionComponent,
    GetByIdProductionComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
