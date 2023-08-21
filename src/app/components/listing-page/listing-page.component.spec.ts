import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingsComponent } from './listing-page.component';

describe('ListingPageComponent', () => {
  let component: ListingsComponent;
  let fixture: ComponentFixture<ListingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListingsComponent]
    });
    fixture = TestBed.createComponent(ListingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
