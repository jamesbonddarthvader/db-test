import { TestBed } from '@angular/core/testing';

import { StockTableService } from './stock-table.service';

describe('StockTableService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StockTableService = TestBed.get(StockTableService);
    expect(service).toBeTruthy();
  });
});
