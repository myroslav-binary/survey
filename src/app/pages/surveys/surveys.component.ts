import { Component, OnInit } from '@angular/core';
import { questions } from './questionnaire.config';
import { BehaviorSubject } from 'rxjs';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Pet } from 'src/types/pet';
import { Question } from 'src/types/question';
import { QuestionsService } from 'src/app/services/questions.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-surveys',
  templateUrl: './surveys.component.html',
  styleUrls: ['./surveys.component.css']
})
export class SurveysComponent implements OnInit {

  questions = questions;
  currentQustionNumber: BehaviorSubject<number>;
  isFirstQuestion: boolean = true;
  isLastQuestion: boolean = false;
  form!: FormGroup;
  currentQustion!: Question<Pet>;

  constructor(
    private service: QuestionsService,
    private router: Router) {
    this.currentQustionNumber = new BehaviorSubject(0);
  }
  ngOnInit(): void {
    this.currentQustionNumber.subscribe(n => {
      this.isFirstQuestion = n === 0;
      this.isLastQuestion = n === this.questions.length - 1;
      if(this.form){
        this.form.controls[this.currentQustion?.valueKey].markAsTouched()
      }
      this.currentQustion = this.questions[n];
    })

    this.form = this.toFormGroup(this.questions);
  }

  nextQuestion() {
    if (this.currentQustionNumber.value < questions.length) {
      this.currentQustionNumber.next(this.currentQustionNumber.value + 1)
    }
  }

  previousQuestion() {
    if (this.currentQustionNumber.value > 0) {
      this.currentQustionNumber.next(this.currentQustionNumber.value - 1)
    }
  }

  onSubmit() {
    this.service.setResult(this.form.value);

    this.router.navigate(['/result'])
  }

  toFormGroup(questions: Question<Pet>[]) {
    const group: any = {};

    questions.forEach(question => {
      group[question.valueKey] = question.isRequired
        ? new FormControl('', Validators.required)
        : new FormControl('');
    });
    return new FormGroup(group);
  }


}
