import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';

const ELEMENT_DATA = [
  {
    orderDate: new Date(),
    orderNumber: 100,
    total: 29.99,
    descriptions: '800g of tuna',
    isChecked: false
  },
  {
    orderDate: new Date(),
    orderNumber: 101,
    total: 19.99,
    descriptions: '500g of tuna',
    isChecked: false
  },
  {
    orderDate: new Date(),
    orderNumber: 102,
    total: 59.99,
    descriptions: '1kg of tuna',
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
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort) sort: MatSort;

  constructor() { }

  ngOnInit() {
    this.dataSource.sort = this.sort
  }

}
