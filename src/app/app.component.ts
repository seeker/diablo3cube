import { Component, OnInit } from '@angular/core';

import { ItemDetailComponent } from './item-detail/item-detail.component';

import { ItemService } from './item.service';
import { Item } from './item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  items: Item[];
  title = 'Diablo 3 item extraction tracker';

  constructor(private itemService: ItemService) {
  }

  ngOnInit() {
    this.showArmors();
  }

  showArmors() {
    this.itemService.getArmors().then(items => this.items = items);
  }

  showWeapons() {
    this.itemService.getWeapons().then(items => this.items = items);
  }

  showJewelry() {
    this.itemService.getJewelry().then(items => this.items = items);
  }
}
