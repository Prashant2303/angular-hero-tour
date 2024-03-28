import { Component, Input, inject } from '@angular/core';
import { Hero } from '../../hero';
import { CommonModule, Location } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'app-hero-details',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './hero-details.component.html',
  styleUrl: './hero-details.component.scss'
})

export class HeroDetailsComponent {
  route = inject(ActivatedRoute);
  location = inject(Location);
  heroService = inject(HeroService);
  hero: Hero | undefined;

  constructor() {
    const heroId = Number(this.route.snapshot.params['id']);
    this.heroService.getHero(heroId).then((hero) => { this.hero = hero })
  }

  goBack() {
    this.location.back()
  }
}
