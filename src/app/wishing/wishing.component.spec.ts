import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WishingComponent } from './wishing.component';

describe('WishingComponent', () => {
  let component: WishingComponent;
  let fixture: ComponentFixture<WishingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WishingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WishingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
