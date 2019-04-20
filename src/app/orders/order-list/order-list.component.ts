import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource, PageEvent } from '@angular/material';

const ELEMENT_DATA = [
  {
    orderDate: new Date(),
    orderNumber: 100,
    total: 29.99,
    description: '800g of tuna',
    isChecked: false
  },
  {
    orderDate: new Date(),
    orderNumber: 101,
    total: 19.99,
    description: '500g of tuna',
    isChecked: false
  },
  {
    orderDate: new Date(),
    orderNumber: 102,
    total: 59.99,
    description: '1kg of tuna',
    isChecked: false
  },
  {
    orderDate: new Date(),
    orderNumber: 100,
    total: 29.99,
    description: '800g of tuna',
    isChecked: false
  },
  {
    orderDate: new Date(),
    orderNumber: 101,
    total: 19.99,
    description: '500g of tuna',
    isChecked: false
  },
  {
    orderDate: new Date(),
    orderNumber: 102,
    total: 59.99,
    description: '1kg of tuna',
    isChecked: false
  },
  {
    orderDate: new Date(),
    orderNumber: 100,
    total: 29.99,
    description: '800g of tuna',
    isChecked: false
  },
  {
    orderDate: new Date(),
    orderNumber: 101,
    total: 19.99,
    description: '500g of tuna',
    isChecked: false
  },
  {
    orderDate: new Date(),
    orderNumber: 102,
    total: 59.99,
    description: '1kg of tuna',
    isChecked: false
  }
];

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  displayedColumns: string[] = ['action', 'orderNumber', 'orderDate', 'description', 'total'];
  dataSource: MatTableDataSource<object>;

  length = 100;
  pageSize = 10;
  pageIndex = 0;
  pageSizeOptions = [1, 2, 5, 10];

  @ViewChild(MatSort) sort: MatSort;

  pageEvent: PageEvent;

  constructor() { }

  onPageChange(e) {
    //const previousPageIndex = e.previousPageIndex;
    this.pageIndex = e.pageIndex;
    this.pageSize = e.pageSize;
    //const length = e.length;

    this.loadData(this.pageIndex, this.pageSize)
  }

  loadData(pageIndex, pageSize) {
    this.dataSource = new MatTableDataSource<object>(ELEMENT_DATA.slice(pageIndex, pageIndex + pageSize))
  }

  ngOnInit() {
    this.loadData(0, this.pageSize)
    this.dataSource.sort = this.sort;
  }

  selectAll() {
    for(let elm of ELEMENT_DATA) {
      elm.isChecked = !elm.isChecked;
    }
  }

}
