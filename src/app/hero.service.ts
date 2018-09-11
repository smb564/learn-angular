import { Injectable } from '@angular/core';
import { HEROES } from './mock-heros';
import {Hero} from './hero';
import {Observable, of} from 'rxjs';
import {MessageService} from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {

    // get the heroes from the server
    // send a message that request sent
    this.messageService.addMessage("HeroService: The request sent to get heroes completed successfully!");
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero> {
    this.messageService.addMessage(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  } 
}
