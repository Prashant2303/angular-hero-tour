import { Injectable, inject } from '@angular/core';
import { Hero } from '../hero';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})

export class HeroService {
  constructor() { }
  baseUrl = 'http://localhost:3000/heroes';
  messageService = inject(MessageService);

  async getAllHeroes(): Promise<Hero[]> {
    const res = await fetch(this.baseUrl);
    this.messageService.add('HeroService: fetched heroes');
    return await res.json();
  }

  async getHero(id: number) {
    const res = await fetch(`${this.baseUrl}/${id}`);
    this.messageService.add(`HeroService: fetched hero ${id}`);
    return await res.json();
  }
}
