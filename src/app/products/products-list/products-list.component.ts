import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'
  ,    '../../bootstrap/dist/css/bootstrap.css'
  ]
})
export class ProductsListComponent implements OnInit {

  products: any[] = [
      {
        id : 1,
        name : 'Dell XPS Tower Special Edition',
        img : 'http://cdn.mos.cms.futurecdn.net/Sndq2zY8UQcvUiSfZTPJW3-650-80.jpg',
        description : "CPU: Intel Core i5 – Core i7 | Graphics: AMD Radeon RX 480 – Nvidia GeForce GTX 1080 | Storage: 1TB HDD – 512GB SSD; 2TB HDD | Communication: Gigabit Ethernet, 802.11ac Wi-Fi, Bluetooth 4.2 | Dimensions (W x D x H): 7.09 x 14.02 x 15.22 inches",
        content : 'Don’t be fooled, this machine is a gaming PC at heart',
        price : 989.9,
        unit : '$',
        rating : 2,
        stock:10,
        date:'12/05/2019'
      },
      {
        id : 2,
        name : 'Surface Studio',
        img : 'http://cdn.mos.cms.futurecdn.net/seuAhSx5VLCKkEUG3mMc6g-650-80.jpg',
        description : "CPU: Intel Core i5 – i7 (6th generation)",
        content : 'The art kid’s dream computer in a metallic nutshell',
        price : 2999,
        unit : '$',
        rating : 2,
        stock:10,
        date:'12/05/2019'
      },
      {
        id : 3,
        name : ' Apple iMac with 5K Retina display',
        img : 'http://cdn.mos.cms.futurecdn.net/463f19b3bcad8737abb533649aaf8c47-650-80.jpg',
        description : "CPU: Intel Dual-Core i5 - Quad-Core i7 | Graphics: Intel Iris Graphics 6000 | RAM: 8GB - 32GB | Storage: 1TB HDD - 3TB SSD | Communication: Wireless: 802.11ac, Bluetooth 4.0 | Dimensions (W x D x H): 196 x 196 x 36mm",
        content : 'A stylish all-in-one with a stunning screen',
        price : 2249,
        unit : '$',
        rating : 2,
        stock:10,
        date:'12/05/2019'
      },
      {
        id : 4,
        name : 'Apple iMac with 4K Retina display (21.5-inch, Late 2015)',
        img : 'http://cdn.mos.cms.futurecdn.net/a5a33ff2d0b5b868be93074a702af9d0-650-80.jpg',
        description : "CPU: Intel Quad-Core i5 | Graphics: Intel Iris Pro Graphics 6200 | RAM: 8GB 1867MHz LPDDR3 | Storage: 1TB Serial ATA Drive @ 5400RPM | Communication: Wireless: 802.11ac, Bluetooth 4.0 | Dimensions (W x D x H): 45cm x 52.8cm x 17.5cm",
        content : 'Still stylish, still stunning, but compact too',
        price : 1308,
        unit : '$',
        rating : 2,
        stock:10,
        date:'12/05/2019'
      },
      {
        id : 5,
        name : ' Apple Mac mini',
        img : 'http://cdn.mos.cms.futurecdn.net/835c17e79b943321254c76e92acad99c-650-80.jpg',
        description : "CPU: Intel Dual-Core i5 | Graphics: Intel Iris Graphics 5100 | RAM: 4GB - 8GB | Storage: 500GB HDD | Communication: Wireless: 802.11ac, Bluetooth 4.0 | Dimensions (W x D x H): 196 x 196 x 36mm",
        content : 'The cheapest way you can go Mac',
        price : 689.29,
        unit : '$',
        rating : 2,
        stock:10,
        date:'12/05/2019'
      }
      ]

  constructor() { }

  ngOnInit() {
  }

}
