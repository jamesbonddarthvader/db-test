import { Component, OnInit } from '@angular/core';
import { StockTableService } from './stock-table.service';
import { Stocks } from './StocksType';

@Component({
  selector: 'app-stock-table',
  templateUrl: './stock-table.component.html',
  styleUrls: ['./stock-table.component.scss']
})
export class StockTableComponent implements OnInit {
  data: Array<Stocks> = [];
  loading: boolean = false;

  constructor(private stockTableService: StockTableService) { }

  ngOnInit() {
    this.getData();
  }

  /**
   * Retrieves stock data from the service
   */
  getData() {
    this.data = this.stockTableService.getUsersStocks();
  }

}
