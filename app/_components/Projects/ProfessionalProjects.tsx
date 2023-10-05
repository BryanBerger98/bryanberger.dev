import angularUniversalSVG from './assets/angular-universal.svg';
import angularPng from './assets/angular.png';
import awsDarkJPG from './assets/aws-dark.jpg';
import bootstrapPng from './assets/bootstrap.png';
import firebasePng from './assets/firebase.png';
import mongoDBPng from './assets/mongodb.png';
import nextCircleBlackPng from './assets/nextjs-circle-black.png';
import reactPng from './assets/react.png';
import tailwindPng from './assets/tailwind.png';
import typescriptPng from './assets/typescript.png';
import ProjectCard, { ProjectData } from './ProjectCard';

const projects: ProjectData[] = [
	{
		id: 1,
		title: 'Shellby.io',
		description: 'L\'entreprise humaine pour mes besoins IT.',
		status: 'released',
		website_url: 'https://shellby.io',
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
	{
		id: 2,
		title: 'CrossFit La Fontaine',
		description: 'Salle de sport à Château-Thierry (02).',
		status: 'released',
		website_url: 'https://crossfit-lafontaine.com',
		technos: [
			{
				title: 'Angular',
				photo_url: angularPng,
			},
			{
				title: 'Angular Universal',
				photo_url: angularUniversalSVG,
			},
			{
				title: 'Bootstrap',
				photo_url: bootstrapPng,
			},
			{
				title: 'Firebase',
				photo_url: firebasePng,
			},
		],
	},
];

const ProfessionalProjects = () => {

	return (
		projects.map((project) => (
			<ProjectCard
				key={ project.id }
				project={ project }
			/>
		))
	);
};

export default ProfessionalProjects;