import { Component, OnInit } from '@angular/core';
import {Evaluator} from 'evaluator';
@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css']
})
export class TextInputComponent implements OnInit {

  log='';
  constructor() { }
  
  ngOnInit() {
  }
  KeyDown(event:any){
    if(event.key==='Enter'){
      const calculator=new Evaluator();
      this.log=this.log+event.target.value+">>"+calculator.run(event.target.value);
    }
  }
  Click(event:any){
    this.log=this.log+"hi there! Please enter a basic Calculation for Example (5+2)";
  }


}
