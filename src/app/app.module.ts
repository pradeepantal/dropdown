import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GamesService } from './services/games.service';
import { DropdownComponent } from './dropdown/dropdown.component';
import { SearchFilterPipe } from './pipes/searchfilter.pipe';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    DropdownComponent,
    SearchFilterPipe
   
   
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [GamesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
