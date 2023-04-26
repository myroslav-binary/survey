export interface Pet {
  type: PetType
  name: string;
  spending: Spending
}

export enum Spending {
  Low = 'low',
  Mid = 'mid',
  Top = 'top'
}

export enum PetType {
  Cat = 'Cat',
  Dog = 'Dog',
  Fish = 'Fish',
  Bird = 'Bird',
}
