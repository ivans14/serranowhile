interface FlagProps {
	width?: number;
	height?: number;
}

export const FlagSpain = ({ width = 30, height = 20 }: FlagProps) => (
	<svg
		width={width}
		height={height}
		viewBox='0 0 32 20'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
	>
		<rect width='32' height='20' rx='2' fill='#AA151B' />
		<rect y='5' width='32' height='10' fill='#F1BF00' />
		<rect y='0' width='32' height='5' fill='#AA151B' />
		<rect y='15' width='32' height='5' fill='#AA151B' />
	</svg>
);
