import { Component, OnInit,DoCheck} from '@angular/core';
import { Products } from '../services/classes/products';
import { Options, LabelType } from '@angular-slider/ngx-slider';
import WomenData from '../../data/data.json'
import { CurrencyPipe } from '@angular/common';
@Component({
  selector: 'app-women',
  templateUrl: './women.component.html',
  styleUrls: ['./women.component.scss']
})
export class WomenComponent implements OnInit {

  listWomenProducts: Products[];
  WomenCategory:string="Bag";
  minValue: number = 60;
  maxValue: number = 140;
  options: Options = {
    floor: 0,
    ceil: 200,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return '<b style="font-size:10px">Min price:</b> ₹' + value;
        case LabelType.High:
          return '<b style="font-size:10px">Max price:</b> ₹' + value;
        default:
          return '₹' + value;
      }
    }
  };
  sortypes:any[]=[{type:"None",id:0},{type:"Price Low to High",id:1},{type:"Price High to Low",id:2},{type:"Alphabetical",id:3}];
  sortBy:number=0;
  constructor() { }
  
  ngOnInit(): void {
    this.listWomenProducts=WomenData ;
  }
  

}
