interface FlagProps {
	width?: number;
	height?: number;
}

export const FlagCatalonia = ({ width = 30, height = 20 }: FlagProps) => (
	<svg
		width={width}
		height={height}
		viewBox='0 0 32 20'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
	>
		<rect width='32' height='20' rx='2' fill='#FCDD09' />
		<rect y='0' width='32' height='2.22' fill='#DA121A' />
		<rect y='4.44' width='32' height='2.22' fill='#DA121A' />
		<rect y='8.89' width='32' height='2.22' fill='#DA121A' />
		<rect y='13.33' width='32' height='2.22' fill='#DA121A' />
		<rect y='17.78' width='32' height='2.22' fill='#DA121A' />
	</svg>
);
