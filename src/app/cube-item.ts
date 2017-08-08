import { Item } from './item';
import { CubeData } from './cube-data';

/**
 * Class for tracking the extraction status of an item.
 * @param  {string}  name      name of the item
 * @param  {boolean} extracted true if the item has been extracted
 * @param  {boolean} stashed   true if the item is in the stash
 * @return {CubeItem}          configured instance
 */
export class CubeItem implements CubeData {
  name: string;
  extractedNormal: boolean;
  extractedSeason: boolean;
  stashed: boolean;

   /**
   * Try to create a CubeItem instance from the passed object.
   * @param  {any}      data to use for object creation
   * @return {CubeItem}      a configured instance
   * @throws {Error}         if the passed data is not a valid CubeItem
   */
  public static createCubeItem(data: any): CubeItem {
    CubeItem.validateData(data);

    const cubeItem: CubeItem = new CubeItem(data.name, data.extractedNormal, data.extractedSeason, data.stashed);

    return cubeItem;
  }

  private static validateData(data: any): void {
    if (data.name === undefined) {
      throw new Error('Missing name property!');
    }

    if (data.extractedNormal === undefined) {
      throw new Error('Missing extractedNormal property!');
    }

    if (data.extractedSeason === undefined) {
      throw new Error('Missing extractedSeason property!');
    }

    if (data.stashed === undefined) {
      throw new Error('Missing stashed property!');
    }
  }

  constructor(name: string, extractedNormal?: boolean, extractedSeason?: boolean, stashed?: boolean) {
    this.name = name;
    this.extractedNormal = extractedNormal || false;
    this.extractedSeason = extractedSeason || false;
    this.stashed = stashed || false;
  }

  /**
   * Move the extracted status from seasonal to non-seasonal (normal).
   */
  public moveToNormal(): void {
    if (this.extractedSeason) {
      this.extractedNormal = true;
      this.extractedSeason = false;
    }
  }
}
