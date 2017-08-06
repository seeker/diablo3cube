import { Pipe, PipeTransform } from '@angular/core';

import { ItemFilterService } from './item-filter.service';
import { Item } from './item';


@Pipe({
  name: 'itemFilter'
})

/**
 * Pipe to filter out items that are not displayed.
 * Uses the ItemFilterService to do all the heavy lifting.
 */
export class ItemFilterPipe implements PipeTransform {
  constructor(private itemFilterService: ItemFilterService) {
  }

  transform(value: Item[]): Item[] {
    if (value) {
      return value.filter(item => this.itemFilterService.displayItem(item));
    }
  }
}
