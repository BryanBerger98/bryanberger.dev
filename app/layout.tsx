import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Bryan Berger',
	description: 'A passionate web developer',
};

const RootLayout = ({ children }: {
  children: React.ReactNode
}) => {
	return (
		<html lang="en">
			<body>{ children }</body>
		</html>
	);
};

export default RootLayout;
