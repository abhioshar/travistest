import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [GameService]
})
export class DashboardComponent implements OnInit {

  constructor(public gameService: GameService) { }

  ngOnInit() {
  }

  playerClick(i) {
    if(this.gameService.turn == 0) {
      this.gameService.cells[i].setValue("tick");
    } else {
      this.gameService.cells[i].setValue("cross");
    }
    this.changePlayer();
  }

  changePlayer() {
    var player = this.gameService.changePlayer();
    if(player == 1) {
      this.computerTurn();
    }
  }

  computerTurn() {
    console.log("Computer's turn!");
  }

}
