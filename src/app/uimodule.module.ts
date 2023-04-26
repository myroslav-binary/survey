import { NgModule } from '@angular/core';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';


@NgModule({
  declarations: [],
  imports: [
    CardModule,
    InputTextModule,
    RadioButtonModule,
    ButtonModule,
    PanelModule
  ],
  exports:[
    CardModule,
    InputTextModule,
    RadioButtonModule,
    ButtonModule,
    PanelModule
  ]
})
export class UIModuleModule { }
