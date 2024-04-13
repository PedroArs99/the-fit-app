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

export type Excercise = {
  id: number;
  imageUrl: string;
  name: string;
  keyName: string;
  muscleGroup: MuscleGroup;
}