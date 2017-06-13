import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-filter',
  templateUrl: './content-filter.component.html',
  styleUrls: ['./content-filter.component.css']
})
export class ContentFilterComponent implements OnInit {

  filters: Array<string>;
  constructor() { 
  this.filters = ["Topic","Senitment","Language","Gender"];
  }

  ngOnInit() {
  }

}
