import { Component, Input, OnInit  } from '@angular/core';
import { GamesService } from '../services/games.service';
import { SearchFilterPipe } from '../pipes/searchfilter.pipe';
import { Item } from '../model/item';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent{
  @Input('default') defaultValue  :string= 'Select item';
  @Input('placeHolder') searchPlaceHolder  :string;
  @Input() itemData  :Item[];

  selected :boolean = false;

  constructor() {}

  onSelect(): void {
   	this.selected = !this.selected; 
  }

  onCheck(name :string): void {

    (<HTMLInputElement>document.getElementById("search")).value = name;

  }

}
