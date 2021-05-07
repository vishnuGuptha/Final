import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionTwoComponent } from './question-two/question-two.component';

const routes: Routes = [
  { path: '', component: QuestionTwoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
