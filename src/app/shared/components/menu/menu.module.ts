import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import {FilterPipe} from './filter.pipe';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MenuService} from './menu.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [MenuComponent, FilterPipe],
  exports: [MenuComponent],
  providers: [MenuService]
})
export class MenuModule { }
