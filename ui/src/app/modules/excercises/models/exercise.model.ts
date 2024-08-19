export type DiaryEntry = {
  date: Date;
  load: number;
};

export type Exercise = {
  id: number;
  name: string;
  description: string;
  category: Category;
  equipment: Array<string>;
  image: string;
  diary: Array<DiaryEntry>;
};

export enum Category {
  ABS = 'Abs',
  ARMS = 'Arms',
  BACK = 'Back',
  CALVES = 'Calves',
  CHEST = 'Chest',
  LEGS = 'Legs',
  SHOULDERS = 'Shoulders',
}