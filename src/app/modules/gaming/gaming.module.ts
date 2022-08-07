import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamingRoutingModule } from './gaming-routing.module';
import { GamesComponent } from './games/games.component';
import { NewComponent } from './new/new.component';
import { SlotsComponent } from './slots/slots.component';
import { JackpotsComponent } from './jackpots/jackpots.component';
import { LiveComponent } from './live/live.component';
import { BlackjackComponent } from './blackjack/blackjack.component';
import { RouletteComponent } from './roulette/roulette.component';
import { TableComponent } from './table/table.component';
import { PokerComponent } from './poker/poker.component';
import { OtherComponent } from './other/other.component';
import { TopComponent } from './top/top.component';



@NgModule({
  declarations: [
    GamesComponent,
    NewComponent,
    SlotsComponent,
    JackpotsComponent,
    LiveComponent,
    BlackjackComponent,
    RouletteComponent,
    TableComponent,
    PokerComponent,
    OtherComponent,
    TopComponent
  ],
  imports: [
    CommonModule,
    GamingRoutingModule
  ]
})
export class GamingModule { }
