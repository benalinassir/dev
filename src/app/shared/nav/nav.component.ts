import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  Navs = [
    { title: 'Top Games', class: 'active' },
    { title: 'New Games', class: '' },
    { title: 'Slots', class: '' },
    { title: 'Jackpots', class: '' },
    { title: 'Live', class: '' },
    { title: 'Blackjack', class: '' },
    { title: 'Roulette', class: '' },
    { title: 'Table', class: '' },
    { title: 'Poker', class: '' },
    { title: 'Other', class: '' },
  ];
  constructor(private router: Router) {}
  ngOnInit(): void {}
  changeActiveClass(item: any) {
    switch (item.title) {
      case 'Top Games': {
        this.router.navigate([`/gaming/top`]);
        break;
      }
      case 'New Games': {
        this.router.navigate([`/gaming/new`]);
        break;
      }
      case 'Slots': {
        this.router.navigate([`/gaming/slots`]);
        break;
      }
      case 'Jackpots': {
        this.router.navigate([`/gaming/jackpots`]);
        break;
      }
      case 'Live': {
        this.router.navigate([`/gaming/live`]);
        break;
      }
      case 'Blackjack': {
        this.router.navigate([`/gaming/blackjack`]);
        break;
      }
      case 'Roulette': {
        this.router.navigate([`/gaming/roulette`]);
        break;
      }
      case 'Table': {
        this.router.navigate([`/gaming/table`]);
        break;
      }
      case 'Poker': {
        this.router.navigate([`/gaming/poker`]);
        break;
      }
      case 'Other': {
        this.router.navigate([`/gaming/other`]);
        break;
      }
      default: {
        this.router.navigate([`/gaming/games`]);
        break;
      }
    }
    for (var i = 0; i <= this.Navs?.length; i++) {
      if (this.Navs[i]?.title == item.title) {
        this.Navs[i].class = 'active';
      } else {
        this.Navs[i].class = '';
      }
    }
  }
}
