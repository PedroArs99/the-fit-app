/**
 * The Harris-Benedict Equation for men:
 *
 * 𝐵𝑀𝑅 (Basal Metabolic Rate) = (13.397W + 4.799H - 5.677A + 88.362) * activity level
 * where:
 * W is body weight in kg
 * H is body height in cm
 * A is age
 */
export function bmr(weight: number, height: number, age: number, activityLevel: number): number {
  const bmr = (13.397 * weight + 4.779 * height - 5.677 * age + 88.362) * activityLevel; 
	return Math.round(bmr);
}

export function effectiveDailyIncome(bmr: number, deficitRate: number): number {
  return Math.round(bmr * deficitRate);
}
