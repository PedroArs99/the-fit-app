export function groupBy<T extends Object, K extends keyof T>(
	collection: Iterable<T>,
	key: K
): Map<T[K], T[]> {
	const result = new Map<T[K], T[]>();

	for (let item of collection) {
		const keyValue = item[key];

		if (!result.has(keyValue)) {
			result.set(keyValue, [item]);
		} else {
			result.get(keyValue)?.push(item);
		}
	}

	return result;
}