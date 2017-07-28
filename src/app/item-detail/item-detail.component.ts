import { Component, OnInit, Input } from '@angular/core';

import {CubeItemService} from '../cube-item.service';

import {Item} from '../item';
import {CubeItem} from '../cube-item';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})

export class ItemDetailComponent implements OnInit {
  @Input() item: Item;

  constructor() {
  }

  ngOnInit() {
  }
}
