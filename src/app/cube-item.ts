import {Item} from './item';
import {CubeData} from './cube-data';

/**
 * Class for tracking the extraction status of an item.
 * @param  {string}  name      name of the item
 * @param  {boolean} extracted true if the item has been extracted
 * @param  {boolean} stashed   true if the item is in the stash
 * @return {CubeItem}          configured instance
 */
export class CubeItem implements CubeData {
    constructor(name: string, extractedNormal?: boolean, extractedSeason?: boolean, stashed?: boolean ){
      this.name = name;
      this.extractedNormal = extractedNormal || false;
      this.extractedSeason = extractedSeason || false;
      this.stashed = stashed || false;
    }

    name: string;
    extractedNormal: boolean;
    extractedSeason: boolean;
    stashed: boolean;
}
