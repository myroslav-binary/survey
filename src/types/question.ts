export enum QuestionTypeEnum {
  ChoiceList = 'CHOICE_LIST',
  Text = 'TEXT',
  Unknown = ''
}

export type QuestionType =
  | QuestionTypeEnum.ChoiceList
  | QuestionTypeEnum.Text
  | QuestionTypeEnum.Unknown

interface QuestionBase<U, T extends QuestionType> {
  type: T
  question: string
  isRequired: boolean
  valueKey: keyof U
}

export interface UnknownQuestion<U, T extends QuestionType = QuestionTypeEnum.Unknown>
  extends QuestionBase<U, T> {
}

export interface TextQuestion<U, T extends QuestionType = QuestionTypeEnum.Text>
  extends QuestionBase<U, T> {
}

export interface ChoiceListQuestion<U, T extends QuestionType = QuestionTypeEnum.ChoiceList>
  extends QuestionBase<U, T> {
  options: Option[]
}

export type Question<U, T extends QuestionType = QuestionType> =
  | TextQuestion<U, T>
  | ChoiceListQuestion<U, T>
  | UnknownQuestion<U, T>

interface Option {
  value: string
  name: string
}
