import { NgModule } from '@angular/core';


import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';
import { FieldsetModule } from 'primeng/fieldset'
import { InputTextModule } from 'primeng/inputtext'
import { MenubarModule } from "primeng/menubar";
import { PanelModule } from 'primeng/panel';
import {InputTextareaModule} from 'primeng/inputtextarea';
import { SidebarModule } from 'primeng/sidebar';
import { ChipModule } from 'primeng/chip';
import { DividerModule } from 'primeng/divider';
import { ImageModule } from 'primeng/image';




@NgModule({
  declarations: [],
  exports: [
    ButtonModule,
    CardModule,
    CommonModule,
    FieldsetModule,
    InputTextareaModule,
    InputTextModule,
    MenubarModule,
    PanelModule,
    SidebarModule,
    ChipModule,
    DividerModule,
    ImageModule
  ],

})
export class PrimeNgModule { }
