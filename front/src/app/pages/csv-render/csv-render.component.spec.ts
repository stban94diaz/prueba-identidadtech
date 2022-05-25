import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsvRenderComponent } from './csv-render.component';

describe('CsvRenderComponent', () => {
  let component: CsvRenderComponent;
  let fixture: ComponentFixture<CsvRenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CsvRenderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CsvRenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
