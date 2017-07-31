import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsModule } from '@angular/forms';
import { ItemListComponent } from './item-list.component';
import { ItemDetailComponent } from '../item-detail/item-detail.component';

import { ItemService } from '../item.service';
import { Item } from '../item';

describe('ItemListComponent', () => {
  let component: ItemListComponent;
  let fixture: ComponentFixture<ItemListComponent>;

  class ItemServiceStub {
    private armors: Item[] = [new Item('an', 'aa')];

    getArmors(): Promise<Item[]> {
      return Promise.resolve(this.armors);
    }
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ItemListComponent, ItemDetailComponent],
      imports: [FormsModule],
      providers: [{ provide: ItemService, useClass: ItemServiceStub }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
