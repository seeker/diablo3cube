/**
 * Class for Diablo 3 items.
 * @param  {string} name  name of the item
 * @param  {string} affix the orange affix text of the item
 * @return {Item}         a configured object
 */
export class Item {
  constructor(name: string, affix: string) {
    this.name = name;
    this.affix = affix;
  }

  name: string;
  affix: string;
}
