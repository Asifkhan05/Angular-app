import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SearchService {

service=new BehaviorSubject<string>('')
serv$=this.service.asObservable()

dataS(data:string){
this.service.next(data)
}
getData():string{
 return this.service.getValue()
}

}
