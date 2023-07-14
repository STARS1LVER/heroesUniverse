import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';

@Pipe({
  name: 'heroImage'
})

export class HeroImagePipe implements PipeTransform {
  transform(hero: Hero): string {
    // si el hero y la propiedad thumbanail y thumbnail.path son diferentes de undefined

    if (hero && hero.thumbnail && hero.thumbnail.path !== undefined) {

      return `${hero.thumbnail.path}.jpg`;

    }

    return 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg';
  }
}
