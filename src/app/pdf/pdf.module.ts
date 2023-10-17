import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PdfRoutingModule } from './pdf-routing.module';
import { HomeComponent } from './components/pages/home/home.component';
import { GetPdfComponent } from './components/features/get-pdf/get-pdf.component';


@NgModule({
  declarations: [
    HomeComponent,
    GetPdfComponent
  ],
  imports: [
    CommonModule,
    PdfRoutingModule
  ]
})
export class PdfModule { }
