import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';
import { TextQuestion } from 'src/types/question';

@Component({
  selector: 'text-question',
  templateUrl: './text-question.component.html',
  styleUrls: ['./text-question.component.css']
})
export class TextQuestionComponent<T> {

  @Input()
  question: TextQuestion<T> = <TextQuestion<T>>{};

  @Input()
  form: AbstractControl = new FormControl();
}
