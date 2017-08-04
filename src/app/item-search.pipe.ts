import { Pipe, PipeTransform } from '@angular/core';

import { Item } from './item';

@Pipe({
  name: 'itemSearch'
})

export class ItemSearchPipe implements PipeTransform {
  private minCharactersForSearch = 3;

  transform(value: Item[], searchTerm: string): Item[] {
    if (searchTerm === '') {
      return value;
    }

    if (searchTerm.length < this.minCharactersForSearch) {
      return value;
    }

    return value.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }
}
