import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {
  ordersList = [{
    customerName: 'User1',
    items: 3,
    amount: 450,
    status: 'Order Received',
    address: 'Bangalore',
    orderDetails: [
      {
        itemName: 'Margherita',
        price: 99
      },
      {
        itemName: 'Margherita',
        price: 99
      },
      {
        itemName: 'Margherita',
        price: 99
      }
    ]
  },
  {
    customerName: 'User2',
    items: 4,
    amount: 550,
    status: 'Order Received',
    address: 'Bangalore',
    orderDetails: [
      {
        itemName: 'Margherita',
        price: 99
      },
      {
        itemName: 'Margherita',
        price: 99
      },
      {
        itemName: 'Margherita',
        price: 99
      },
      {
        itemName: 'Margherita',
        price: 99
      }
    ]
  },
  {
    customerName: 'User3',
    items: 2,
    amount: 300,
    status: 'Order Received',
    address: 'Bangalore',
    orderDetails: [
      {
        itemName: 'Margherita',
        price: 99
      },
      {
        itemName: 'Margherita',
        price: 99
      }
    ]
  }
];
newOrderForm = {
  customerName: '',
  items: 0,
  amount: 0,
  status: 'Order Received',
  address: '',
  orderDetails: []
};
  orderDetails: { customerName: string; items: number; amount: number; status: string; address: string; orderDetails: { itemName: string; price: number; }[]; };
  constructor() { }

  ngOnInit() {
  }

  changeStatus(index) {
    if (this.ordersList[index].status === 'Order Received') {
      this.ordersList[index].status = 'Preparing';
    } else if (this.ordersList[index].status === 'Preparing') {
      this.ordersList[index].status = 'Ready to Serve';
    } else {
      this.ordersList[index].status = 'Complete';
    }
  }

  addNewOrder() {
    this.ordersList.push(this.newOrderForm);
    this.newOrderForm = {
      customerName: '',
      items: 0,
      amount: 0,
      status: 'Order Received',
      address: '',
      orderDetails: []
    };
  }

  addNewItem(index) {
    this.newOrderForm.orderDetails.push({itemName: '', price: 0});
    console.log(this.ordersList);
  }

  fetchDetails(index) {
    this.orderDetails = this.ordersList[index];
  }

}
