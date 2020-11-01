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
  public showFunctionTree: boolean = false;
  public functionTreeMenuOption: MenuItem[];
  public activeFunctionTreeOption: MenuItem;

  availableProducts: Product[];
    
  selectedProducts: Product[];
    
  draggedProduct: Product;
  
  ngOnInit(): void {
    this.apList = [
      {label: '', icon: 'pi pi-th-large', command: () => {
        this.openFunctionTree();
      }},
      {label: 'Part DCOP'},
      {label: 'LowYieldAnalysis'},
      {label: 'N5 DailyReport'},
      {label: 'Lot WAT'},
      {label: 'Part WAT'},
      {label: '+'}
  ];
  this.activeAp = this.apList[0];

  this.functionTreeMenuOption = [
    {
      label: 'Function', icon: 'pi pi-apple', command: () => {
        this.showFunctionTreeDropdown();
      }
    },
    {
      label: 'MyFavorite', icon: 'pi pi-chart-line'
    }
  ];
  this.activeFunctionTreeOption = this.functionTreeMenuOption[0];

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

  public openFunctionTree() {
    this.showFunctionTree = true;
  }

  public showFunctionTreeDropdown() {
    
  }

  dragStart(event,product: Product) {
    this.draggedProduct = product;
}

drop(event) {
    if (this.draggedProduct) {
        let draggedProductIndex = this.findIndex(this.draggedProduct);
        this.selectedProducts = [...this.selectedProducts, this.draggedProduct];
        this.availableProducts = this.availableProducts.filter((val,i) => i!=draggedProductIndex);
        this.draggedProduct = null;
    }
}

dragEnd(event) {
    this.draggedProduct = null;
}

findIndex(product: Product) {
  let index = -1;
  for(let i = 0; i < this.availableProducts.length; i++) {
      if (product.id === this.availableProducts[i].id) {
          index = i;
          break;
      }
  }
  return index;
}

}
