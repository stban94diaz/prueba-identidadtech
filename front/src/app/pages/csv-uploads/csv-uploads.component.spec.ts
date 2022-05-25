import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsvUploadsComponent } from './csv-uploads.component';

describe('CsvUploadsComponent', () => {
  let component: CsvUploadsComponent;
  let fixture: ComponentFixture<CsvUploadsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CsvUploadsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CsvUploadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
