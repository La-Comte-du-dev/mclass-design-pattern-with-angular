import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetPdfComponent } from './get-pdf.component';

describe('GetPdfComponent', () => {
  let component: GetPdfComponent;
  let fixture: ComponentFixture<GetPdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetPdfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetPdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
