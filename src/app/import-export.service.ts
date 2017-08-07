import { Injectable } from '@angular/core';

import { CubeItem } from './cube-item';

/**
* Class for importing and exporting user data.
*/
@Injectable()
export class ImportExportService {

  constructor() { }

  public exportData(data: CubeItem[]): string {
    return JSON.stringify({"version":1, "data":data});
  }

  public importData(data: string): CubeItem[] {
    let decoded:any = JSON.parse(data);

    switch(decoded.version) {
      case 1:{
        return this.version1Decoder(decoded.data);
      }

      default:
        throw new Error('Unsupported version');
    }
  }

  private version1Decoder(data:any):CubeItem[] {
    let decodedItems:CubeItem[] = [];

    for (let item of data) {
      decodedItems.push(CubeItem.createCubeItem(item));
    }

    return decodedItems;
  }
}
