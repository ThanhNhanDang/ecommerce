import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  myScriptElement!: HTMLScriptElement; 
  constructor(){
    this.myScriptElement = document.createElement("script");
    this.myScriptElement.src =  "assets/js/main.js";
    document.body.appendChild(this.myScriptElement);
  }

  ngOnInit(): void {
  }

}
