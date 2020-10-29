import { Category } from './model/category';
import { Component, OnInit } from '@angular/core';
import { Product } from './model/product';
import {MenuItem} from 'primeng/api';
import {
  enable as enableDarkMode,
  disable as disableDarkMode,
  auto as followSystemColorScheme,
  exportGeneratedCSS as collectCSS,
} from 'darkreader';
import { Function } from './model/function';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  public apList: MenuItem[];
  public activeAp: MenuItem;
  public products: MenuItem[];
  public selectedProduct: Product;
  public categories: Category[] = [];
  public functions: Function[] = [];
  
  ngOnInit(): void {
    this.apList = [
      {label: '', icon: 'pi pi-th-large'},
      {label: 'Part DCOP'},
      {label: 'LowYieldAnalysis'},
      {label: 'N5 DailyReport'},
      {label: 'Lot WAT'},
      {label: 'Part WAT'},
      {label: '+'}
  ];
  this.activeAp = this.apList[0];

    this.products = [
      { label: 'IPOP', icon: 'pi pi-refresh', },
      { label: 'iDS', icon: 'pi pi-times', },
      { label: 'IEDA2', icon: 'pi pi-external-link', },
      { label: 'NTO System', icon: 'pi pi-upload', },
      { label: 'Litho Engineer', icon: 'pi pi-refresh', },
    ];

    this.categories = [
      { title: 'XD', 'description': 'No Doubt'},
      { title: 'ABC', 'description': 'No Doubt'},
      { title: 'QQQ', 'description': 'No Doubt'},
    ];

    this.functions = [
      { title: 'Part DCOP', 'description': 'Analyze a lot of things, like XD', icon: 'pi-apple' },
      { title: 'DailyReport', 'description': 'Analyze a lot of things, like XD', icon: 'pi-calendar' },
      { title: 'LowYieldAnalysis', 'description': 'Analyze a lot of things, like XD', icon: 'pi-chart-line' },
      { title: 'Part DCOP', 'description': 'Analyze a lot of things, like XD', 'icon': 'pi-chart-bar' },
      { title: 'DailyReport', 'description': 'Analyze a lot of things, like XD', icon: 'pi-camera' },
      { title: 'LowYieldAnalysis', 'description': 'Analyze a lot of things, like XD', icon: 'pi-file' },
    ]

    enableDarkMode({
      brightness: 100,
      contrast: 90,
      sepia: 10,
  });
  }
}
