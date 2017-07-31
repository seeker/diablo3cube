import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { Item } from '../item';
import { CubeItem } from '../cube-item';
import { CubeItemService } from '../cube-item.service';
import { ItemDetailComponent } from './item-detail.component';

class CubeItemServiceStub {
  public get(name: string): CubeItem {
    return new CubeItem('foo');
  }
}

describe('ItemDetailComponent', () => {
  let component: ItemDetailComponent;
  let fixture: ComponentFixture<ItemDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ItemDetailComponent],
      providers: [{ provide: CubeItemService, useClass: CubeItemServiceStub }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemDetailComponent);
    component = fixture.componentInstance;
    component.item = new Item('foo', 'bar');
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
