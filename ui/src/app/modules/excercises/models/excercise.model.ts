export enum MuscleGroup {
  ABS = 'ABS',
  BACK = 'BACK',
  BICEPS = 'BICEPS',
  CARDIO = 'CARDIO',
  CHEST = 'CHEST',
  LEGS = 'LEGS',
  LUMBARS = 'LUMBARS',
  SHOULDERS = 'SHOULDERS',
  TRICEPS = 'TRICEPS',
}

export class Excercise {
  constructor(public id: string, public imageUrl: string, public name: string, public muscleGroup: MuscleGroup) {}
}
