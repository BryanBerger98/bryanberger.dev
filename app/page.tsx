import { Download, MessageSquare } from 'lucide-react';

import { Button } from '@/components/ui/button';

import AboutMe from './_components/AboutMe';
import Navbar from './_components/Navbar';

const Home = () => {

	return (
		<div className="py-8 bg-gradient-to-tr from-[#97f0ff] to-[#aa95fe] min-h-screen">
			<div className="px-8">
				<Navbar />
			</div>
			<div className="container m-auto">
				<div className="pt-24 flex flex-col gap-6 mb-11">
					<p className="text-3xl font-semibold">Hello there! 👋</p>
					<h1 className="text-8xl font-bold">I&apos;m Bryan Berger</h1>
					<h2 className="text-6xl font-semibold">a passionate web developer</h2>
				</div>
				<div className="flex gap-4 mb-32">
					<Button
						className="gap-2"
						type="button"
					>
						<Download size="16" />
						Download my résumé
					</Button>
					<Button
						className="gap-2"
						type="button"
						variant="secondary"
					>
						<MessageSquare size="16" />
						Text me
					</Button>
				</div>
				<AboutMe />
			</div>
		</div>
	);
};

export default Home;
