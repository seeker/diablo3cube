import { Component, OnInit, Input, Output } from '@angular/core';

import { ImportExportService } from '../import-export.service';

@Component({
  selector: 'app-import-export',
  templateUrl: './import-export.component.html',
  styleUrls: ['./import-export.component.css']
})

export class ImportExportComponent implements OnInit {
  public static helpText = 'Paste data to import here and hit "Import"';
  dataText: string;

  constructor(private importExportService: ImportExportService) {
    this.dataText = ImportExportComponent.helpText;
  }

  importData() { this.importExportService.importData(this.dataText) }
  exportData() {
    // TODO implement me
    this.dataText = this.importExportService.exportData([]);
  }

  ngOnInit() {
  }

}
