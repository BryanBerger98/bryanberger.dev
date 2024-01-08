import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
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
	metadataBase: new URL('https://bryanberger.dev'),
	openGraph: {
		type: 'website',
		locale: 'en_US',
		url: 'https://bryanberger.dev',
		title: 'Bryan Berger',
		description: 'Bryan Berger, a passionate web developer. I build websites and apps with React, Next.js, TypeScript and TailwindCSS.',
		siteName: 'Bryan Berger',
		images: [
			{
				url: 'https://bryanberger.dev/og.jpg',
				width: 1200,
				height: 630,
				alt: 'Bryan Berger',
			},
		],
	},
};

const RootLayout = ({ children }: {
  children: React.ReactNode
}) => {
	return (
		<html lang="en">
			<body>{ children }</body>
			<Analytics />
			<SpeedInsights />
		</html>
	);
};

export default RootLayout;
