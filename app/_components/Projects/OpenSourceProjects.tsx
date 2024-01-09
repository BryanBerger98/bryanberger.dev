import awsDarkJPG from './assets/aws-dark.jpg';
import mongoDBPng from './assets/mongodb.png';
import nextCircleBlackPng from './assets/nextjs-circle-black.png';
import reactPng from './assets/react.png';
import tailwindPng from './assets/tailwind.png';
import typescriptPng from './assets/typescript.png';
import vitePng from './assets/vite.png';
import ProjectCard, { ProjectData } from './ProjectCard';

const projects: ProjectData[] = [
	{
		id: 1,
		title: 'datepicker',
		description: 'Composable React datepicker inspired by react-day-picker.',
		github_url: 'https://github.com/BryanBerger98/datepicker',
		npm_url: 'https://www.npmjs.com/package/@bryanberger/datepicker',
		website_url: 'https://datepicker.bryanberger.dev',
		status: 'released',
		github_stars: 10,
		github_forks: 0,
		technos: [
			{
				title: 'React',
				photo_url: reactPng,
			},
			{
				title: 'Tailwind',
				photo_url: tailwindPng,
			},
			{
				title: 'TypeScript',
				photo_url: typescriptPng,
			},
			{
				title: 'Vite',
				photo_url: vitePng,
			},
			{
				title: 'NextJS',
				photo_url: nextCircleBlackPng,
			},
		],
	},
	{
		id: 2,
		title: 'lodge-v2',
		description: 'NextJS starter boilerplate for web applications.',
		github_url: 'https://github.com/BryanBerger98/lodge-v2',
		status: 'under-development',
		github_stars: 4,
		github_forks: 1,
		technos: [
			{
				title: 'React',
				photo_url: reactPng,
			},
			{
				title: 'Tailwind',
				photo_url: tailwindPng,
			},
			{
				title: 'TypeScript',
				photo_url: typescriptPng,
			},
			{
				title: 'MongoDB',
				photo_url: mongoDBPng,
			},
			{
				title: 'NextJS',
				photo_url: nextCircleBlackPng,
			},
			{
				title: 'AWS',
				photo_url: awsDarkJPG,
			},
		],
	},
];

const OpenSourceProjects = () => {

	return (
		projects.map((project) => (
			<ProjectCard
				key={ project.id }
				project={ project }
			/>
		))
	);
};

export default OpenSourceProjects;