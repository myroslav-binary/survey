import { Component, EventEmitter, Input, OnDestroy, Output, forwardRef } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Question, UnknownQuestion, QuestionTypeEnum } from 'src/types/question';

@Component({
  selector: 'base-question',
  templateUrl: './base-question.component.html',
  styleUrls: ['./base-question.component.css'],
})
export class BaseQuestionComponent<T> {

  QuestionType = QuestionTypeEnum;

  @Input()
  question: Question<T> = <UnknownQuestion<T>>{};

  @Input()
  form: AbstractControl = new FormControl();

  @Output()
  valueChanged = new EventEmitter<string>();
}
