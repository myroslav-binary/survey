import { Pet, PetType, Spending } from "src/types/pet";
import { Question, QuestionTypeEnum } from "src/types/question";

export const questions: Question<Pet>[] = [
  {
    type: QuestionTypeEnum.ChoiceList,
    question: 'Which pet to do you have?',
    isRequired: true,
    options: [
      {
        value: PetType.Cat,
        name: 'Cat'
      }, {
        value: PetType.Dog,
        name: 'Dog'
      }, {
        value: PetType.Fish,
        name: 'Fish'
      }, {
        value: PetType.Bird,
        name: 'Bird'
      }
    ],
    valueKey: 'type'
  },
  {
    type: QuestionTypeEnum.Text,
    question: 'What is the name of your pet ?',
    isRequired: true,
    valueKey: "name"
  },
  {
    type: QuestionTypeEnum.ChoiceList,
    question: 'How much do you spend per month for your pet\'s food?',
    isRequired: true,
    valueKey: "spending",
    options: [
      {
        value: Spending.Low,
        name: 'Less than 20 CHF'
      }, {
        value: Spending.Mid,
        name: 'Between 20 and 50 CHF'
      }, {
        value: Spending.Top,
        name: 'More than 50 CHF'
      }
    ]
  }
];

