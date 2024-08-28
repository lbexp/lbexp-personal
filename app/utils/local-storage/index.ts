import { canUseDOM } from '~/utils/dom';

export function getLocalStorage<T>(key: string): T | null {
	if (canUseDOM && localStorage) {
		try {
			const value = JSON.parse(localStorage.getItem(key) || '');
			return value;
		} catch {
			return null;
		}
	}

	return null;
}

export function setLocalStorage<T = unknown>(key: string, value: T) {
	if (canUseDOM && localStorage) {
		localStorage.setItem(key, JSON.stringify(value));
		return value;
	}

	return null;
}
