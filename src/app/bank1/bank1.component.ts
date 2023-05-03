import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bank1',
  templateUrl: './bank1.component.html',
  styleUrls: ['./bank1.component.css']
})
export class Bank1Component implements OnInit{
   
  data="your perfecr banking partner"
  constructor() {}
  
  ngOnInit(): void {
    
  }
  login(){
    alert("logined")
  }
  unameChange(event:any){
    console.log(event.target.value);
    
  }

}
