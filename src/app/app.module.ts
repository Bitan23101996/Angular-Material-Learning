import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { TypographyComponent } from './typography/typography.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { BadgesComponent } from './badges/badges.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MenuComponent } from './menu/menu.component';
import { ListsComponent } from './lists/lists.component';
import { GridListComponent } from './grid-list/grid-list.component';
import { ExpansionPanelComponent } from './expansion-panel/expansion-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    TypographyComponent,
    ButtonsComponent,
    BadgesComponent,
    SpinnerComponent,
    ToolbarComponent,
    SidebarComponent,
    MenuComponent,
    ListsComponent,
    GridListComponent,
    ExpansionPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
