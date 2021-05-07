import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { Subscription } from 'rxjs/internal/Subscription';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-question-two',
  templateUrl: './question-two.component.html',
  styleUrls: ['./question-two.component.scss']
})
export class QuestionTwoComponent implements OnInit {
data_Obj:any
  constructor(private commonService: CommonService) { }

  ngOnInit(): void {

  }

  emitEventToChild():void {
    this.data_Obj = {items: []}
    this.commonService.item_list_arr.push(this.data_Obj)

  }
}
