type NutritionalValues = {
  energy: number;
  fat: number;
  carbohydrates: number;
  fiber: number;
  protein: number;
  salt: number;
};

export type Meal = {
  id: string;
  imageUrl: string;
  name: string;
  nutritionalValues: NutritionalValues;
}