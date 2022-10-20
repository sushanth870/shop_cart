import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mens',
  templateUrl: './mens.component.html',
  styleUrls: ['./mens.component.scss']
})
export class MensComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  mensClothings_detailes=[{prod_name:"Mens Casual Premium slim fit t-shirt",
                  prod_price: 5.20,
                image_path:"/assets/images/slimfit.jpg"},
                {prod_name:"Mens Casual Premium slim fit t-shirt",
                prod_price: 10.2,
              image_path:"/assets/images/redTshirt.jpg"},
              {prod_name:"Mens Casual Jacket",
              prod_price: 15.00,
            image_path:"/assets/images/jacket.jpg"},
            {prod_name:"Mens Casual slim fit",
            prod_price: 25.20,
          image_path:"/assets/images/redTshirt.jpg"},
          {prod_name:"Mens Casual Premium slim fit t-shirt",
          prod_price: 18.20,
        image_path:"/assets/images/slimfit.jpg"},
        {prod_name:"Mens Casual Jacket",
        prod_price: 14.20,
      image_path:"/assets/images/jacket.jpg"},
      {prod_name:"Mens Casual slim fit",
      prod_price: 26.20,
    image_path:"/assets/images/redTshirt.jpg"},
    {prod_name:"Mens Casual slim fit",
            prod_price: 5.20,
          image_path:"/assets/images/redTshirt.jpg"},
          {prod_name:"Mens Casual Premium slim fit t-shirt",
          prod_price: 10.20,
        image_path:"/assets/images/slimfit.jpg"},
        {prod_name:"Mens Casual Jacket",
        prod_price: 30.20,
      image_path:"/assets/images/jacket.jpg"},
      {prod_name:"Mens Casual slim fit",
      prod_price: 4.20,
    image_path:"/assets/images/redTshirt.jpg"},
  ]
}
