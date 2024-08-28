import { PropsWithChildren, useEffect, useRef, useState } from 'react';

import { COLOR_MODE_SEQUENCE } from '~/models/common';
import { getLocalStorage, setLocalStorage } from '~/utils/local-storage';

import { COLOR_LS_KEY, WRAPPER_ID } from './constants';
import ColorModeContext from './context';

export default function ColorModeProvider({ children }: PropsWithChildren<unknown>) {
	const initiated = useRef(false);
	const [colorIndex, setColorIndex] = useState<number>(0);

	const changeColorIndex = () => {
		const sequenceLength = COLOR_MODE_SEQUENCE.length;

		setColorIndex((prevIndex) => {
			const nextIndex = prevIndex + 1;

			if (nextIndex >= sequenceLength) {
				const newIndex = nextIndex % sequenceLength;
				setLocalStorage(COLOR_LS_KEY, COLOR_MODE_SEQUENCE[newIndex].value);

				return newIndex;
			}

			setLocalStorage(COLOR_LS_KEY, COLOR_MODE_SEQUENCE[nextIndex].value);

			return nextIndex;
		});
	};

	useEffect(() => {
		if (!initiated.current) {
			const initialColor = getLocalStorage(COLOR_LS_KEY);

			if (initialColor) {
				const initialIndex = COLOR_MODE_SEQUENCE.findIndex((color) => color.value === initialColor);

				if (initialIndex) {
					setColorIndex(initialIndex);
				} else {
					setLocalStorage(COLOR_LS_KEY, COLOR_MODE_SEQUENCE[colorIndex].value);
				}
			} else {
				setLocalStorage(COLOR_LS_KEY, COLOR_MODE_SEQUENCE[colorIndex].value);
			}
		}

		initiated.current = true;
	}, [colorIndex]);

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
