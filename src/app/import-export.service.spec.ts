import { TestBed, inject } from '@angular/core/testing';

import { ImportExportService } from './import-export.service';

import { CubeItem } from './cube-item';

describe('ImportExportService', () => {
  let itemA: CubeItem;
  let itemB: CubeItem;

  let items: CubeItem[];

  let encodedItems: string = '{"version":1,"data":[{"name":"a","extractedNormal":true,"extractedSeason":false,"stashed":false},{"name":"a","extractedNormal":false,"extractedSeason":true,"stashed":false}]}';

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ImportExportService]
    });

    itemA = new CubeItem('a', true);
    itemB = new CubeItem('a', false, true);

    items = [itemA, itemB];
  });

  it('should be created', inject([ImportExportService], (service: ImportExportService) => {
    expect(service).toBeTruthy();
  }));

  it('should export data', inject([ImportExportService], (service: ImportExportService) => {
    expect(service.exportData(items)).toEqual(encodedItems);
  }));

  it('should import version 1 data', inject([ImportExportService], (service: ImportExportService) => {
    expect(service.importData(encodedItems)).toEqual(items);
  }));

  it('should throw an error on unsupported version', inject([ImportExportService], (service: ImportExportService) => {
    expect(()=>{service.importData('{"version":2, "data":null}')}).toThrowError();
  }));

  it('should throw an error on invalid version 1 data', inject([ImportExportService], (service: ImportExportService) => {
    expect(()=>{service.importData('{"version":1,"data":[{"name":"a","extractedNormal":true,"extractedSeason":false}]}')}).toThrowError();
  }));
});
