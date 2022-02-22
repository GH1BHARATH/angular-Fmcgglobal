import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAlertComponent } from './Product-alert.component';

describe('ProductAlertsComponent', () => {
  let component: ProductAlertComponent;
  let fixture: ComponentFixture<ProductAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductAlertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
