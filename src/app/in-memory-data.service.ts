import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Outworld Destroyer' },
      { id: 12, name: 'Pudge' },
      { id: 13, name: 'Puck' },
      { id: 14, name: 'Dragon Knight' },
      { id: 15, name: 'Lina' },
      { id: 16, name: 'Shadow Fiend' },
      { id: 17, name: 'Enchantress' },
      { id: 18, name: 'Luna' },
      { id: 19, name: 'Clockwerk' },
      { id: 20, name: 'Crystal Maiden' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
