import { Injectable } from '@angular/core';
import { Game } from '../../../models/interfaces/game.interface';
import { ALL_GAMES } from '../../../models/mock-data/mock-games';

@Injectable({
  providedIn: 'root'
})
export class GameDetailsService {
  private gamesList: Game[];
  constructor() {
    this.gamesList = ALL_GAMES;
  }

  getAllGames() {
    return this.gamesList;
  }

  getTrendingGames() {
    return this.gamesList.filter((game: Game) => {
      return game.trending === true;
    });
  }

  filterGame(key: string) {
    return this.gamesList.filter((game: Game) => {
      return game.GameName.includes(key);
    });
  }
}
