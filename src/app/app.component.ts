import { Component, OnInit } from '@angular/core';
import { DropdownComponent } from './dropdown/dropdown.component';
import { Item } from './model/item';
import { GamesService } from './services/games.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Games';
  games  :Item[];
  placeHolder : string = "Search game"

  constructor(private gamesService: GamesService) {}

  ngOnInit(): void {
  		this.getGames();
  }

  getGames(): void {
   		this.gamesService.getGames().then(games => this.games = games);
  }
 }
