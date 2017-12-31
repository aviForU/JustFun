import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatInputModule} from '@angular/material';
import {MatMenuModule} from '@angular/material/menu';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
@NgModule({
  imports: [MatMenuModule,MatFormFieldModule,MatInputModule,MatButtonModule,MatIconModule],
  exports: [MatMenuModule,MatFormFieldModule,MatInputModule,MatButtonModule,MatIconModule],
})
export class MaterialModule {}
