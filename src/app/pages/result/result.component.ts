import { Component, OnInit } from '@angular/core';
import { QuestionsService } from 'src/app/services/questions.service';
import { questions } from '../surveys/questionnaire.config';
import { Pet } from 'src/types/pet';
import { ChoiceListQuestion } from 'src/types/question';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  text!: string;
  questions = questions;

  constructor(private service: QuestionsService) {

  }

  ngOnInit(): void {
    const pet = this.service.getResult();
    this.text = `You have a ${this.converValueToName(pet, 'type')} called ${pet.name} and you spend ${this.converValueToName(pet, 'spending')} per month of its food.`
  }

  converValueToName(pet: Pet, property: keyof Pet) {
    const question = this.questions.find(x => x.valueKey === property) as ChoiceListQuestion<Pet>
    return question.options.find(x => x.value === pet[property])?.name;
  }
}
