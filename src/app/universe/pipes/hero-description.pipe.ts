import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';

@Pipe({
  name: 'Herodescription'
})

export class HeroDescriptionPipe implements PipeTransform {
  transform(hero: string): string {

    const link:string = 'https://www.marvel.com/characters'
    if( hero === ''){
      return `I apologize for not having the current hero description readily available.
      Unfortunately, the information you are looking for does not exist within my current knowledge base. However, I encourage you to visit the following
      link to obtain more information regarding the hero you are interested in:.
      Exploring the provided link will provide you with comprehensive details and insights about the hero, including their abilities, lore, and other relevant information. I apologize for any inconvenience caused and appreciate your understanding.`

    }

    return hero;


  }
}
