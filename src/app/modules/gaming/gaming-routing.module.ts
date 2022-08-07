import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlackjackComponent } from './blackjack/blackjack.component';
import { GamesComponent } from './games/games.component';
import { JackpotsComponent } from './jackpots/jackpots.component';
import { LiveComponent } from './live/live.component';
import { NewComponent } from './new/new.component';
import { OtherComponent } from './other/other.component';
import { PokerComponent } from './poker/poker.component';
import { RouletteComponent } from './roulette/roulette.component';
import { SlotsComponent } from './slots/slots.component';
import { TableComponent } from './table/table.component';
import { TopComponent } from './top/top.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'List Games',
    },
    children: [

      {
        path: '',
        redirectTo: 'top',
      },
      {
        path: 'top',
        component: TopComponent,
        data: {
          title: 'LIST GAMES',
        },
      },
      {
        path: 'games',
        component: GamesComponent,
        data: {
          title: 'LIST GAMES',
        },
      },
      {
        path: 'new',
        component: NewComponent,
        data: {
          title: 'New GAMES',
        },
      },
      {
        path: 'slots',
        component: SlotsComponent,
        data: {
          title: 'Slots GAMES',
        },
      },
      {
        path: 'jackpots',
        component: JackpotsComponent,
        data: {
          title: 'Jackpots GAMES',
        },
      },
      {
        path: 'live',
        component: LiveComponent,
        data: {
          title: 'Live GAMES',
        },
      },
      {
        path: 'blackjack',
        component: BlackjackComponent,
        data: {
          title: 'Blackjack GAMES',
        },
      },
      {
        path: 'roulette',
        component: RouletteComponent,
        data: {
          title: 'Roulette GAMES',
        },
      },
      {
        path: 'table',
        component: TableComponent,
        data: {
          title: 'Table GAMES',
        },
      },
      {
        path: 'poker',
        component: PokerComponent,
        data: {
          title: 'Poker GAMES',
        },
      },
      {
        path: 'other',
        component: OtherComponent,
        data: {
          title: 'Other GAMES',
        },
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GamingRoutingModule {}
