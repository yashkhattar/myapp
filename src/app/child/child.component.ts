import { Component, OnInit } from '@angular/core';
import {TransferService} from '../transfer.service'

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  p:any;
  t$:any;

  constructor(private transfer: TransferService) { 
    // this.recdata();
  }
recdata(){
  console.log(this.transfer.t$)
  this.p=this.transfer.t$
  return this.p
  //console.log(this.p)
}
  ngOnInit(): void {

}
  }


