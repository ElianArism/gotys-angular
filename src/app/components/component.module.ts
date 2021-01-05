import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { GraficaBarrasComponent } from './grafica-barras/grafica-barras.component';
import { RouterModule } from '@angular/router';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SpinnerComponent } from './spinner/spinner.component';

@NgModule({
  declarations: [
    NavbarComponent,
    GraficaBarrasComponent,
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    BrowserAnimationsModule,
    NgxChartsModule
  ],
  exports: [
    NavbarComponent,
    GraficaBarrasComponent,
    SpinnerComponent
  ]
})

export class ComponentModule { }
