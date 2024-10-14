import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TableServiceService } from '../table-service.service';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent  {

  content=new FormGroup({
    Name:new FormControl()  ,
    Email:new FormControl(),
    Gender:new FormControl(),
    Address:new FormControl()
  })


  

  constructor(private router:Router,private serv:TableServiceService) { }
  dataSubmit(){
    
    this.serv.ser.subscribe(e=>{e.push(this.content.value);
    }
    )

    alert("Data Added SuccessFully")
    this.router.navigate(['/table'])
  }
  cancelBtn(){
this.router.navigate(['/table'])
  }

}
