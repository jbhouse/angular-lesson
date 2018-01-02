import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaserequestlineitemComponent } from './purchaserequestlineitem.component';

describe('PurchaserequestlineitemComponent', () => {
  let component: PurchaserequestlineitemComponent;
  let fixture: ComponentFixture<PurchaserequestlineitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaserequestlineitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaserequestlineitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
