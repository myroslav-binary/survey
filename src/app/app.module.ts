import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SurveysComponent } from './pages/surveys/surveys.component';
import { TextQuestionComponent } from './components/text-question/text-question.component';
import { ChoiceListQuestionComponent } from './components/choice-list-question/choice-list-question.component';
import { BaseQuestionComponent } from './components/base-question/base-question.component';
import { UIModuleModule as UIModule } from './uimodule.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResultComponent } from './pages/result/result.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    SurveysComponent,
    TextQuestionComponent,
    ChoiceListQuestionComponent,
    BaseQuestionComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UIModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
