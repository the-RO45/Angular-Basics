import { Component, OnInit } from '@angular/core';
import {sampleData} from './datasource';

@Component({
  selector: 'app-sample-tree',
  templateUrl: './sample-tree.component.html',
  styleUrls: ['./sample-tree.component.css']
})
export class SampleTreeComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
    this.data = sampleData;
  }
    public data: Object[] = [];
}
