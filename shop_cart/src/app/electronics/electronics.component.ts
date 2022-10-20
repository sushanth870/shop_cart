import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.scss']
})
export class ElectronicsComponent implements OnInit {

  constructor() { }

  electronics_detailes=[{prod_name:"samsungM21",
  prod_price: 5.20,
image_path:"/assets/images/samsungM21.jpg"},
{prod_name:"oppo",
prod_price: 10.2,
image_path:"/assets/images/oppo.jpg"},
{prod_name:"Nothing Phone",
prod_price: 15.00,
image_path:"/assets/images/NothingPhone.jpg"},
{prod_name:"samsungM21",
prod_price: 25.20,
image_path:"/assets/images/samsungM21.jpg"},
{prod_name:"oppo",
prod_price: 18.20,
image_path:"/assets/images/oppo.jpg"},
{prod_name:"Nothing Phone",
prod_price: 14.20,
image_path:"/assets/images/NothingPhone.jpg"},
{prod_name:"samsungM21",
prod_price: 26.20,
image_path:"/assets/images/samsungM21.jpg"},
{prod_name:"oppo",
prod_price: 5.20,
image_path:"/assets/images/oppo.jpg"},
{prod_name:"Nothing Phone",
prod_price: 10.20,
image_path:"/assets/images/NothingPhone.jpg"},
{prod_name:"samsungM21",
prod_price: 30.20,
image_path:"/assets/images/samsungM21.jpg"},
{prod_name:"oppo",
prod_price: 4.20,
image_path:"/assets/images/oppo.jpg"},
]
  ngOnInit(): void {
  }

}
