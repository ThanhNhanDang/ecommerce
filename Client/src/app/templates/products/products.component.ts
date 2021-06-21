import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  myScriptElement!: HTMLScriptElement; 
  constructor(){
    this.myScriptElement = document.createElement("script");
    this.myScriptElement.src =  "assets/js/main.js";
    document.body.appendChild(this.myScriptElement);
  }
  ngOnInit(): void {
  }

}
