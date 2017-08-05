import { Component, OnInit, Input } from '@angular/core';
import { ItemService } from '../item.service';
import { Item } from '../item';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css'],
})

export class ItemListComponent implements OnInit {
  @Input() items: Item[];

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.showArmors();
  }

  onSearchChange() {
    this.items = this.items.slice();
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
