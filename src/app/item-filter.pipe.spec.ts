import { TestBed, inject } from '@angular/core/testing';

import { ItemFilterPipe } from './item-filter.pipe';

import { Item } from './item';
import { ItemFilterService } from './item-filter.service';

describe('ItemFilterPipe', () => {
  let foo: Item;
  let foobar: Item;
  let foobaz: Item;

  let items: Item[];

  class ItemFilterServiceMock {
    public display = false;

    public displayItem(item: Item): boolean {
      return this.display;
    }
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ItemFilterPipe, {
        provide: ItemFilterService, useClass: ItemFilterServiceMock
      }]
    });

    foo = new Item('foo', 'foo');
    foobar = new Item('foobar', 'foobar');
    foobaz = new Item('foobaz', 'foobaz');

    items = [foo, foobar, foobaz];
  });

  it('create an instance', inject([ItemFilterPipe], (pipe: ItemFilterPipe) => {
    expect(pipe).toBeTruthy();
  }));

  it('passes items that are displayed', inject([ItemFilterPipe, ItemFilterService],
    (pipe: ItemFilterPipe, service: ItemFilterServiceMock) => {
      service.display = true;

    expect(pipe.transform(items)).toEqual(items);
  }));

  it('does not pass items that are not displayed', inject([ItemFilterPipe, ItemFilterService],
    (pipe: ItemFilterPipe, service: ItemFilterServiceMock) => {
      service.display = false;

    expect(pipe.transform(items)).toEqual([]);
  }));

  it('does not transform null', inject([ItemFilterPipe, ItemFilterService],
    (pipe: ItemFilterPipe, service: ItemFilterServiceMock) => {
      service.display = true;

    expect(pipe.transform(null)).toEqual(undefined);
  }));

  it('does not transform undefined', inject([ItemFilterPipe, ItemFilterService],
    (pipe: ItemFilterPipe, service: ItemFilterServiceMock) => {
      service.display = true;

    expect(pipe.transform(undefined)).toEqual(undefined);
  }));
});
