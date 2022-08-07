import { Component, OnInit } from '@angular/core';
import { GamesService } from 'src/app/services/games/games.service';
import { first } from 'rxjs/operators';
import { JackpotsService } from 'src/app/services/jackpots/jackpots.service';
@Component({
  selector: 'app-roulette',
  templateUrl: './roulette.component.html',
  styleUrls: ['./roulette.component.css']
})
export class RouletteComponent implements OnInit {
  Games: any;
  Jackpot: any;
  ShowJackpot: boolean = false;
  MyJackpotAmount: number = 0;
  MyGame: any;
  Data: any = [];
  AllJackpot: any;
  constructor(private gamesService: GamesService,private jackpotsService : JackpotsService) {}
  ngOnInit(): void {
    this.getGames();
    setInterval(() => {
      this.getGames();
    }, 1000);
  }
  getGames() {
    this.gamesService
      .GetGames()
      .pipe(first())
      .subscribe(
        (data) => {
          this.Games = data;
          const TopGame = this.Games.filter(
            (word: { categories: any }) =>
              word.categories.includes('roulette')
          );
          this.Games = TopGame;
          this.GetAllJackpot();
        },
        (error) => {
          if (error) {
          }
        }
      );
  }
  GetAllJackpot() {
    this.jackpotsService
      .GetJackpot()
      .pipe(first())
      .subscribe(
        (data) => {
          this.AllJackpot = data;
          this.MergeData(this.Games, this.AllJackpot);
        },
        (error) => {
          if (error) {
          }
        }
      );
  }
  MergeData(games: any, jackpot: any) {
    let merged = [];
    let arr3 = games.map((game: any, id: any) =>
      Object.assign({}, game, jackpot[id])
    );
    for (let i = 0; i < games.length; i++) {
      merged.push({
        ...games[i],
        ...jackpot.find((itmInner: any) => itmInner.game === games[i].id),
      });
    }
    this.Games = merged;
  }
}
