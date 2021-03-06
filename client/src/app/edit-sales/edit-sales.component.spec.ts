import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EditSalesComponent } from './edit-sales.component';

describe('EditSalesComponent', () => {
  let component: EditSalesComponent;
  let fixture: ComponentFixture<EditSalesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
