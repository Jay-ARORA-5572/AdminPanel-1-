import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoicepaymentDetailsComponent } from './invoicepayment-details.component';

describe('InvoicepaymentDetailsComponent', () => {
  let component: InvoicepaymentDetailsComponent;
  let fixture: ComponentFixture<InvoicepaymentDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InvoicepaymentDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InvoicepaymentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
