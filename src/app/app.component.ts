import { Component } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { from } from 'rxjs';
import { ApiService } from './api.service';
import {TransferService} from './transfer.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent{
  data:any;
  y: any;
  x: any;
  z:any;
  
constructor(private http: ApiService,
  private transfer: TransferService) { 
this.data= new Array<any>();
this.GetdatafromAPI();
this.AllotToTransferServvice();
}
onInputChange(event: any){
  console.log(event.value)
  this.y= event.value
  }
  
 AllotToTransferServvice(){
  
 }   
  
GetdatafromAPI(){
 this.http.getData().subscribe((data)=>{
 console.log(data)
 console.log("Get Data from API was called!!")
 this.x=data
 console.log("x was alooted");
 console.log(this.x);

this.transfer.t$=this.x
console.log("transfer service variable");
 console.log(this.transfer.t$)
 
 
})

}
slicedata(){
 this.z= this.x.slice(0,this.y)
 console.log(this.z)
}
}
