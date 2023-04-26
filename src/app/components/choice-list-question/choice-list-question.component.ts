import { Component, EventEmitter, Input, Output, forwardRef } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ChoiceListQuestion, Question, UnknownQuestion } from 'src/types/question';

@Component({
  selector: 'choice-list-question',
  templateUrl: './choice-list-question.component.html',
  styleUrls: ['./choice-list-question.component.css']
})
export class ChoiceListQuestionComponent<T> {

  @Input()
  question: ChoiceListQuestion<T> = <ChoiceListQuestion<T>>{};

  @Input()
  form: AbstractControl = new FormControl();
}
