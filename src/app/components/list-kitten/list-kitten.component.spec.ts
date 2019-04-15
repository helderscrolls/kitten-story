import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListKittenComponent } from './list-kitten.component';

describe('ListKittenComponent', () => {
  let component: ListKittenComponent;
  let fixture: ComponentFixture<ListKittenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListKittenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListKittenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
