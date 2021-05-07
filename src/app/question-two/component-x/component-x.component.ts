import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Subscription } from 'rxjs/internal/Subscription';
import { CommonService } from '../../common.service';
@Component({
  selector: 'app-component-x',
  templateUrl: './component-x.component.html',
  styleUrls: ['./component-x.component.scss']
})
export class ComponentXComponent implements OnInit {

  constructor(private commonService: CommonService) { }
  ngOnInit(): void {
    this.service = this.commonService
  }
service: any
add_subItem(i:any) {
  let item = {
    data_value: ''
  }
  this.service.item_list_arr[i]['items'].push(item)

}
}
