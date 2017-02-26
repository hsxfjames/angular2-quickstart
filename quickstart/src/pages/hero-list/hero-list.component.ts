import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from '../../providers/heroes/heroes';
import { HeroService } from '../../providers/heroes/hero.service'

@Component({
  moduleId: module.id,
  selector: 'hero-list',
  templateUrl: 'hero-list.component.html',
  styleUrls: [ 'hero-list.component.css' ]
})
export class HeroListComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  constructor(
    private router: Router,
    private heroService: HeroService
  ) { }

  ngOnInit(): void {
    this.setHeroes();
  }

  setHeroes(): void {
    this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  gotoDetail(): void {
    this.router.navigate(['/hero-detail', this.selectedHero.id]);
  }
}
