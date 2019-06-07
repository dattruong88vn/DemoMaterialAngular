import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoMaterialRoutingModule } from './demo-material-routing.module';
import { TypographyComponent } from './typography/typography.component';
import { DemoMaterialComponent } from './demo-material.component';
import { ButtonComponent } from './button/button.component';
import { MaterialModule } from '../_material/material.module';

@NgModule({
  declarations: [TypographyComponent, DemoMaterialComponent, ButtonComponent],
  exports: [],
  imports: [
    CommonModule,
    DemoMaterialRoutingModule,
    MaterialModule
  ]
})
export class DemoMaterialModule { }
