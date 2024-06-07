type DiaryEntry = {
  date: Date;
  weight: number;
  unit: string;
};

export type Exercise = {
  id: number;
  name: string;
  description: string;
  category: string;
  equipment: Array<string>;
  image: string;
  diary: Array<DiaryEntry>;
};