import ProjectCard, { ProjectData } from './ProjectCard';

const projects: ProjectData[] = [
	{
		id: 1,
		title: 'Atomic React',
		description: 'French YouTube channel about React and learning platform.',
		status: 'released',
		website_url: 'https://atomic-react.com',
		youtube_url: 'https://www.youtube.com/@atomicreact',
		technos: [],
	},
];

const OtherProjects = () => {

	return (
		projects.map((project) => (
			<ProjectCard
				key={ project.id }
				project={ project }
			/>
		))
	);
};

export default OtherProjects;