import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  myScriptElement!: HTMLScriptElement;
  myScriptElement2!: HTMLScriptElement; 
  myScriptElement3!: HTMLScriptElement;  
  constructor(){
    this.myScriptElement = document.createElement("script");
    this.myScriptElement2 = document.createElement("script");
    this.myScriptElement3 = document.createElement("script");
    this.myScriptElement.src =  "assets/js/main.js";
    this.myScriptElement2.src =  "assets/lib/easing/easing.min.js";
    this.myScriptElement3.src =  "assets/lib/slick/slick.min.js";
    document.body.appendChild(this.myScriptElement);
    document.body.appendChild(this.myScriptElement2);
    document.body.appendChild(this.myScriptElement3);
  }
  ngOnInit(): void {
  }

}
