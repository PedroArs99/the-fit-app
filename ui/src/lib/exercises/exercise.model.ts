export interface DiaryEntry {
  date: string;
  load: number;
}

export interface Exercise {
  id: string;
  category: string;
  description: string;
  diaryEntries: Array<DiaryEntry>;
  image: string;
  name: string;
}