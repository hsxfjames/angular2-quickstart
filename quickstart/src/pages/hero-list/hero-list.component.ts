import { Component, OnInit } from '@angular/core';

import { Hero } from '../../providers/heroes/heroes';
import { HeroService } from '../../providers/heroes/hero.service'

@Component({
  moduleId: module.id,
  selector: 'hero-list',
  templateUrl: 'hero-list.component.html',
  styleUrls: ['hero-list.component.css']
})
export class HeroListComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  constructor(
    private heroService: HeroService
  ) {}

  ngOnInit():void {
    this.setHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  setHeroes(): void {
    this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
  }
}
