import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionTwoComponent } from './question-two/question-two.component';
import { ComponentXComponent } from './question-two/component-x/component-x.component';
import { CommonService } from './common.service';
import { ComponentYComponent } from './question-two/component-x/component-y/component-y.component';
import { ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    AppComponent,
    QuestionTwoComponent,
    ComponentXComponent,
    ComponentYComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
