import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{MatPaginatorModule}from "@angular/material/paginator"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadComponent } from './head/head.component';
import { TableComponent } from './table/table.component';
import { TheadComponent } from './thead/thead.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule} from '@angular/material/table';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule ,FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    TableComponent,
    TheadComponent,
    FormComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule, 
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
