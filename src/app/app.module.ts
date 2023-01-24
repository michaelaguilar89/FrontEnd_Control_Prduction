import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//toastr
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http'

//components
import { ListProductionComponent } from './components/list-production/list-production.component';
import { CreateUpdateProductionComponent } from './components/create-update-production/create-update-production.component';
import { DeleteProductionComponent } from './components/delete-production/delete-production.component';
import { GetByIdProductionComponent } from './components/get-by-id-production/get-by-id-production.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header2/header.component';

@NgModule({
  declarations: [
    AppComponent,
    ListProductionComponent,
    CreateUpdateProductionComponent,
    DeleteProductionComponent,
    GetByIdProductionComponent,
    FooterComponent,
    HeaderComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule, 
     BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
