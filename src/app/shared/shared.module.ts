import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { TrimPipe } from './pipes/trim.pipe';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [CapitalizePipe,TrimPipe],
  imports: [
    CommonModule
  ],
  exports:[CapitalizePipe,TrimPipe,FormsModule]
})
export class SharedModule { }
