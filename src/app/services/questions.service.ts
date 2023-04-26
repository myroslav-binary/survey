import { Injectable } from '@angular/core';
import { Pet } from 'src/types/pet';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  private static result: Pet;

  constructor() { }

  setResult(value: Pet) {
    QuestionsService.result = value;
  }

  getResult() {
    return QuestionsService.result;
  }

  hasValue(): boolean {
    return Boolean(QuestionsService.result);
  }
}
