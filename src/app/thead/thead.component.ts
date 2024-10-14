import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from '../search.service';
@Component({
  selector: 'app-thead',
  templateUrl: './thead.component.html',
  styleUrls: ['./thead.component.css']
})
export class TheadComponent  {

  filterText=''
  constructor(private router:Router,private ser:SearchService) {  }

@Output() filterChange = new EventEmitter<string>();

  updateData(value:string){
    this.ser.dataS(value)

  }
  onFilterChange() {
    this.filterChange.emit(this.filterText);
  }
  formClick(){
    this.router.navigate(['/form'])
    
  }
  save(){
    alert('filter saved')
  }

}
