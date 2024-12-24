export function groupBy<T extends object, K extends keyof T>(
	collection: Iterable<T>,
	key: K
): Map<T[K], T[]> {
	const result = new Map<T[K], T[]>();

	for (const item of collection) {
		const keyValue = item[key];

		if (!result.has(keyValue)) {
			result.set(keyValue, [item]);
		} else {
			result.get(keyValue)?.push(item);
		}
	}

	return sortMapByKeyAsc(result);
}

export function sortMapByKeyAsc<K, V>(map: Map<K, V>): Map<K, V> {
	const entries = Array.from(map.entries());

	entries.sort(([keyA], [keyB]) => {
		if (typeof keyA === 'string') {
			return keyA.localeCompare(keyB as string);
		} else if (typeof keyA === 'number') {
			return keyA - (keyB as number);
		} else {
			return 0;
		}
	});

	return new Map(entries)
}
