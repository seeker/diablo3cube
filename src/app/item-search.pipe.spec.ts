import { ItemSearchPipe } from './item-search.pipe';

import { Item } from './item';

describe('ItemSearchPipe', () => {
  let pipe: ItemSearchPipe;

  let foo: Item;
  let foobar: Item;
  let foobaz: Item;

  let items: Item[];

  beforeEach(() => {
    pipe = new ItemSearchPipe();

    foo = new Item('foo', 'foo');
    foobar = new Item('foobar', 'foobar');
    foobaz = new Item('foobaz', 'foobaz');

    items = [foo, foobar, foobaz];
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('filters out foo item', () => {
    expect(pipe.transform(items, 'bar')).not.toContain(foo);
  });

  it('filters out items that do not match "oob"', () => {
    const filtered: Item[] = pipe.transform(items, 'oob');

    expect(filtered).toContain(foobar);
    expect(filtered).toContain(foobaz);
  });

  it('does not filter items if the search is empty', () => {
    const filtered: Item[] = pipe.transform(items, '');

    expect(filtered).toEqual(items);
  });

  it('does not filter items if the search term is less than 3 characters', () => {
    const filtered: Item[] = pipe.transform(items, 'oo');

    expect(filtered).toEqual(items);
  });
});
