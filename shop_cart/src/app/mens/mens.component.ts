import { Component, OnInit } from '@angular/core';
import { freeApiService } from '../services/freeapi.service';
import { Products } from '../services/classes/products';
@Component({
  selector: 'app-mens',
  templateUrl: './mens.component.html',
  styleUrls: ['./mens.component.scss']
})
export class MensComponent implements OnInit {

  listMenProducts: Products[];
  constructor(private _freeApiService: freeApiService) {}

  ngOnInit() {
    this._freeApiService.getAllMensProducts().subscribe((products) => {
      this.listMenProducts = products;
    });
  }
  
}
