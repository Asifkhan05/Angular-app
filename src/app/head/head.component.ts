import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent  {
constructor(private roter:Router){}
adminClick(){
this.roter.navigate(['/table'])
}
}
