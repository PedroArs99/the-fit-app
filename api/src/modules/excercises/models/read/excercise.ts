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
  id: string;
  imageUrl: string;
  name: string;
  muscleGroup: MuscleGroup;
}