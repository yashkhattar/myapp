import { Injectable } from '@angular/core';
import {Subject} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class TransferService {
  private data = new Subject<any>();
  t$=this.data.asObservable();
  t: any;

  constructor() { }
  
}
