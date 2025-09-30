interface FlagProps {
	width?: number;
	height?: number;
}

export const FlagUK = ({ width = 30, height = 20 }: FlagProps) => (
	<svg
		width={width}
		height={height}
		viewBox='0 0 32 20'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
	>
		<rect width='32' height='20' rx='2' fill='#012169' />
		<path d='M0 0L32 20M32 0L0 20' stroke='white' strokeWidth='2.5' />
		<path d='M0 0L32 20M32 0L0 20' stroke='#C8102E' strokeWidth='1.5' />
		<path d='M16 0V20M0 10H32' stroke='white' strokeWidth='3.5' />
		<path d='M16 0V20M0 10H32' stroke='#C8102E' strokeWidth='2' />
	</svg>
);
