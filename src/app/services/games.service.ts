import { Injectable } from '@angular/core';
import { Item } from '../model/item';
import { GAMES } from './mock-games';

@Injectable()
export class GamesService {
 getGames(): Promise<Item[]> {
    return Promise.resolve(GAMES);
  }
}