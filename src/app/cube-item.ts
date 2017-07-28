import {Item} from './item';

/**
 * Class for tracking the extraction status of an item.
 * @param  {string}  name      name of the item
 * @param  {boolean} extracted true if the item has been extracted
 * @param  {boolean} stashed   true if the item is in the stash
 * @return {CubeItem}          configured instance
 */
export class CubeItem {
    constructor(name: string, extracted?: boolean, stashed?: boolean ){
      this.name = name;
      this.extracted = extracted || false;
      this.stashed = stashed || false;
    }

    name: string;
    extracted: boolean;
    stashed: boolean;
}
