import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemoMaterialComponent } from './demo-material.component';
import { TypographyComponent } from './typography/typography.component';
import { ButtonComponent } from './button/button.component';

const routes: Routes = [
    {path: "", component: DemoMaterialComponent, children: [
      {path: "typography", component: TypographyComponent},
      {path: "button", component: ButtonComponent}
    ]}
]; 

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoMaterialRoutingModule {  }
