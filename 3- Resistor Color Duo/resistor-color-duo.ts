type TResistorsNames =
	| 'black'
	| 'brown'
	| 'red'
	| 'orange'
	| 'yellow'
	| 'green'
	| 'blue'
	| 'violet'
	| 'grey'
	| 'white';

const resistorsValues = {
	black: 0,
	brown: 1,
	red: 2,
	orange: 3,
	yellow: 4,
	green: 5,
	blue: 6,
	violet: 7,
	grey: 8,
	white: 9,
};

export const decodedValue = (resistorsArr: TResistorsNames[]): number =>
	resistorsArr.reduce(
		(prevValue, currValue, index) =>
			typeof resistorsValues[currValue] === 'number'
				? prevValue + resistorsValues[currValue] * ((index + 1) * 10)
				: prevValue,
		0
	);
