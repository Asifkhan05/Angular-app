import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TableServiceService {

  services=new BehaviorSubject<any[]>([])
  ser=this.services.asObservable()


}
