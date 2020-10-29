import { Component, OnInit } from '@angular/core';
import { TransferService } from '../transfer.service';


@Component({
  selector: 'app-json',
  templateUrl: './json.component.html',
  styleUrls: ['./json.component.scss']
})
export class JsonComponent implements OnInit{
    s:any;
  constructor(private http: TransferService) { 
 }
pub(){
  this.s=this.http.t$
  console.log(this.s)
  return this.s;
}
ngOnInit(): void {

}
}
