import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockTableComponent } from './stock-table.component';

describe('StockTableComponent', () => {
  let component: StockTableComponent;
  let fixture: ComponentFixture<StockTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should find table row if array not empty', () => {
    const compiled = fixture.debugElement.nativeElement;
    const tr = compiled.querySelector('table tr');
    if (component.data.length > 0) {
      expect(tr.textContent).toContain(component.data[0].name);
    } else {
      expect(tr.textContent).toContain('Nothing to show');
    }

  });
});
