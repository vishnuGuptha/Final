import { Component, Input, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-component-y',
  templateUrl: './component-y.component.html',
  styleUrls: ['./component-y.component.scss']
})
export class ComponentYComponent implements OnInit {
@Input() item_data: any
  constructor(private commonService: CommonService) { }
service: any;

  ngOnInit(): void {
    this.service =this.commonService
  }
  save_data(j: any,i: any) {
let val: any = document.getElementById(i)
this.item_data.items[i].data_value = val.value;
console.log("Question Number 2:",this.commonService.item_list_arr)
alert("Data Submitted successfully, please open console and Verify Data")
  }
}
