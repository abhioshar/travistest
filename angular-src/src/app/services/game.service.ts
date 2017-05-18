import { Injectable } from '@angular/core';
import { Cell } from '../helper/cell';
import { Player } from '../helper/player';

@Injectable()
export class GameService {

  players = [];
  turn: number = 0;
  
  cells = [];
  freeCells = 9;

  constructor() { 
    this.initializeBlocks();
    this.intializePlayers();
  }

  initializeBlocks() {
    this.cells = [];
    for(var i = 1; i <= 9; ++i) {
      var cell = new Cell();
      cell.empty = true;
      cell.value = "";
      cell.symbol = "";

      this.cells.push(cell);
    }
  }

  intializePlayers() {
    this.players = [];
    
    var userPlayer = new Player();
    var computerPlayer = new Player();

    userPlayer.isComputer = false;
    computerPlayer.isComputer = true;

    this.players.push(userPlayer);
    this.players.push(computerPlayer);
  }

  changePlayer() {
    this.turn = 1 - this.turn;
    return this.turn;
  }

}


