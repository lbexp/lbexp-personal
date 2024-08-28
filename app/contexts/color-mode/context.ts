import { createContext } from 'react';
import { ColorMode } from '~/models/common';

interface ColorModeContext {
	colorIndex: number;
	colorValue: ColorMode;
	onChangeColor: () => void;
}

const colorModeContext = createContext<ColorModeContext>({
	colorIndex: 0,
	colorValue: 'light',
	onChangeColor: () => {}
});

export default colorModeContext;
