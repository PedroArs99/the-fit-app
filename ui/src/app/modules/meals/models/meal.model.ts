type NutritionalValues = {
  energy: number;
  fat: number;
  carbohydrates: number;
  fiber: number;
  protein: number;
  salt: number;
};

export class Meal {
  constructor(
    public id: string,
    public imageUrl: string,
    public name: string,
    public nutritionalValues: NutritionalValues,
  ) {}
}
