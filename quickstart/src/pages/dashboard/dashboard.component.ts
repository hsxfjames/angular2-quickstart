import { Component, OnInit } from '@angular/core';

import { Hero } from '../../providers/heroes/heroes'
import { HeroService } from '../../providers/heroes/hero.service'

@Component({
  moduleId: module.id,
  selector: 'dashboard',
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(
    private heroService: HeroService
  ) { }
  
  ngOnInit() {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(1, 5));
  }
}
