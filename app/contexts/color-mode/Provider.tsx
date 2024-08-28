import { PropsWithChildren, useState } from 'react';

import { COLOR_MODE_SEQUENCE } from '~/models/common';
import { WRAPPER_ID } from './constants';

import ColorModeContext from './context';

export default function ColorModeProvider({ children }: PropsWithChildren<unknown>) {
	const [colorIndex, setColorIndex] = useState<number>(0);

	const changeColorIndex = () => {
		const sequenceLength = COLOR_MODE_SEQUENCE.length;

		setColorIndex((prevIndex) => {
			const nextIndex = prevIndex + 1;

			if (nextIndex >= sequenceLength) {
				return nextIndex % sequenceLength;
			}

			return nextIndex;
		});
	};

	return (
		<ColorModeContext.Provider
			value={{
				colorIndex,
				colorValue: COLOR_MODE_SEQUENCE[colorIndex].value,
				onChangeColor: changeColorIndex
			}}
		>
			<div id={WRAPPER_ID} data-color={COLOR_MODE_SEQUENCE[colorIndex].value}>
				{children}
			</div>
		</ColorModeContext.Provider>
	);
}
