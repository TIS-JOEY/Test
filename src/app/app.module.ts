import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { ListboxModule } from 'primeng/listbox';


import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ButtonModule} from 'primeng/button';
import {TabViewModule} from 'primeng/tabview';
import {CardModule} from 'primeng/card';
import {MenuModule} from 'primeng/menu';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TabMenuModule} from 'primeng/tabmenu';
import {DragDropModule} from 'primeng/dragdrop';
import { MyFavoriteComponent } from './components/my-favorite/my-favorite.component';
import { ResizableDraggableComponent } from './components/resizable-draggable/resizable-draggable.component';


@NgModule({
  declarations: [
    AppComponent,
    MyFavoriteComponent,
    ResizableDraggableComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    ScrollPanelModule,
    ListboxModule,
    CommonModule,
    FormsModule,
    ListboxModule,
    ButtonModule,
    TabViewModule,
    CardModule,
    MenuModule,
    TabMenuModule,
    DragDropModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
