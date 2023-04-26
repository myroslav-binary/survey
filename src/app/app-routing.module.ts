import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SurveysComponent } from './pages/surveys/surveys.component';
import { ResultComponent } from './pages/result/result.component';
import { canShowResultGuard } from './services/can-show-result.guard';

const routes: Routes = [
  {
    path: 'survey',
    component: SurveysComponent
  },
  {
    path: 'result',
    component: ResultComponent,
    canActivate:[canShowResultGuard]
  },
  {
    path: '**',
    component: SurveysComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
