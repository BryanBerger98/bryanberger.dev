import { ExternalLink, GitFork, Star } from 'lucide-react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

export type ProjectData = {
	id: number,
	title: string,
	description: string,
	npm_url?: string,
	github_url?: string,
	youtube_url?: string,
	github_stars?: number,
	github_forks?: number,
	status: 'under-development' | 'archived' | 'released',
	website_url?: string,
	technos: {
		title: string;
		photo_url: StaticImageData;
	}[]
};

type ProjectCardProps = {
	project: ProjectData;
};

const ProjectCard = ({ project }: ProjectCardProps) => {
	return (
		<Card className="w-full lg:min-w-[700px] lg:max-w-[750px]">
			<CardHeader>
				<CardTitle>{ project.title }</CardTitle>
				<CardDescription>{ project.description }</CardDescription>
				<div className="flex gap-3">
					{
						project.status === 'under-development' && (
							<Badge variant="secondary">Under development</Badge>
						)
					}
					{
						project.status === 'archived' && (
							<Badge variant="outline">Archived</Badge>
						)
					}
					{
						project.status === 'released' && (
							<Badge variant="default">Released</Badge>
						)
					}
					{
						project.github_stars ? (
							<Badge
								className="flex items-center gap-2"
								variant="secondary"
							><Star size="16" /><span>{ project.github_stars } star{ project.github_stars > 1 ? 's' : '' }</span>
							</Badge>
						) : null
					}
					{
						project.github_forks ? (
							<Badge
								className="flex items-center gap-2"
								variant="secondary"
							><GitFork size="16" /><span>{ project.github_forks } fork{ project.github_forks > 1 ? 's' : '' }</span>
							</Badge>
						) : null
					}
				</div>
			</CardHeader>
			<CardContent>
				<div className="flex gap-2">
					{
						project.technos.map((techno) => (
							<Image
								key={ techno.title }
								alt={ techno.title }
								className="rounded-sm"
								height="24"
								src={ techno.photo_url }
								title={ techno.title }
								width="24"
							/>
						))
					}
				</div>
			</CardContent>
			<CardFooter className="justify-end gap-4">
				{
					project.website_url ? (
						<Button
							className="gap-2 items-center"
							variant="outline"
							asChild
						>
							<Link
								href={ project.website_url }
								target="_blank"
							>
								View website <ExternalLink size="16" />
							</Link>
						</Button>
					) : null
				}
				{
					project.npm_url ? (
						<Button
							className="gap-2 items-center"
							variant="destructive"
							asChild
						>
							<Link
								href={ project.npm_url }
								target="_blank"
							>
								View on NPM <ExternalLink size="16" />
							</Link>
						</Button>
					) : null
				}
				{
					project.youtube_url ? (
						<Button
							className="gap-2 items-center"
							variant="destructive"
							asChild
						>
							<Link
								href={ project.youtube_url }
								target="_blank"
							>
								YouTube channel <ExternalLink size="16" />
							</Link>
						</Button>
					) : null
				}
				{
					project.github_url ? (
						<Button
							className="gap-2 items-center"
							asChild
						>
							<Link
								href={ project.github_url }
								target="_blank"
							>
								View on GitHub <ExternalLink size="16" />
							</Link>
						</Button>
					) : null
				}
			</CardFooter>
		</Card>
	);
};

export default ProjectCard;