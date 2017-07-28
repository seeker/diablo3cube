import { async, inject, TestBed } from '@angular/core/testing';
import { MockBackend, MockConnection } from '@angular/http/testing';

import { ItemService } from './item.service';
import { Item } from './item';
import { CubeItem } from './cube-item';

describe('CubeItem', () => {
  const testName = "Test";

  let sut: CubeItem;

  beforeEach(() => {
    sut = new CubeItem(testName);
  });

  it('should be created', () => {
    expect(sut).toBeTruthy();
  });

  it('should have a name', () => {
    expect(sut.name).toMatch(testName);
  });

  it('should not be extracted', () => {
    expect(sut.extracted).toEqual(false);
  });

  it('should not be stashed', () => {
    expect(sut.stashed).toEqual(false);
  });

  it('should be extracted', () => {
    sut = new CubeItem(testName, true);
    expect(sut.extracted).toEqual(true);
  });

  it('should be stashed', () => {
    sut = new CubeItem(testName, false, true);

    expect(sut.stashed).toEqual(true);
  });
});
