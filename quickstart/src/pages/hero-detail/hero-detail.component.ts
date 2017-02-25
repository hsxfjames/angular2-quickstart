import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { Hero }        from '../../providers/heroes/heroes';
import { HeroService } from '../../providers/heroes/hero.service'

import 'rxjs/add/operator/switchMap';

@Component({
  moduleId: module.id,
  selector: 'hero-detail',
  templateUrl: 'hero-detail.component.html',
  styleUrls: ['hero-detail.component.css'],
})
export class HeroDetailComponent implements OnInit {
  @Input('targetHero')
  targetHero: Hero;
  
  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ) { }
  
  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.heroService.getHero(+params['id']))
      .subscribe(hero => this.targetHero = hero);
  }
  
  goBack(): void {
    this.location.back();
  }
}
