import { useContext } from 'react';
import colorModeContext from './context';

export default function useColorMode() {
	const colorMode = useContext(colorModeContext);

	if (!colorMode) {
		throw 'useColorMode can only be used when wrapped with its provider!';
	}

	return colorMode;
}
