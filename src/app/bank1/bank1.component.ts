import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-bank1',
  templateUrl: './bank1.component.html',
  styleUrls: ['./bank1.component.css']
})
export class Bank1Component implements OnInit{
   
  data="your perfecr banking partner"
  uname:any
  psw:any
  constructor(private ds:DataService) {}
  
  ngOnInit(): void {
    
  }
  login(){
    alert(`${this.ds.sdata} ${this.ds.sdata}`)
    
  }
}

