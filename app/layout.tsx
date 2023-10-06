import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Bryan Berger',
	description: 'Bryan Berger, a passionate web developer. I build websites and apps with React, Next.js, TypeScript and TailwindCSS.',
	keywords: 'web, developer, react, next, typescript, javascript',
	creator: 'Bryan Berger',
	authors: {
		name: 'Bryan Berger',
		url: 'https://bryanberger.dev',
	},
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
