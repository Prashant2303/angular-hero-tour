import { CommonModule } from '@angular/common';
import { Hero } from '../../hero';
import { HeroService } from './../../services/hero.service';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  heroService = inject(HeroService);
  heroes: Hero[] = []
  constructor() {
    this.heroService.getAllHeroes().then(heroes => this.heroes = heroes.slice(1, 5));
  }
}
