import { Component, inject } from '@angular/core';
import { Hero } from '../../hero';
import { CommonModule } from '@angular/common';
import { HeroService } from '../../services/hero.service';
import { MessageService } from '../../services/message.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.scss'
})

export class HeroesComponent {
  heroes: Hero[] = [];
  // selectedHero?: Hero;

  heroService = inject(HeroService);
  messageService = inject(MessageService);

  constructor() {
    this.heroService.getAllHeroes().then((heroes) => { this.heroes = heroes })
  }

  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero;
  //   this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`)
  // }
}
