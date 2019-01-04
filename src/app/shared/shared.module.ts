import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FloatingAddButtonComponent } from './floating-add-button/floating-add-button.component'
import { MatButtonModule, MatIconModule } from '@angular/material';

@NgModule({
  declarations: [FloatingAddButtonComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    FloatingAddButtonComponent
  ]
})
export class SharedModule { }
