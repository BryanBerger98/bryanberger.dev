import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import bryanJpg from '@/public/bryan.jpg';

const AboutMe = () => {

	const birthDate = new Date(1998, 7, 1);

	const getAgeFromDate = (date: Date) => {
		const today = new Date();
		let age = today.getFullYear() - date.getFullYear();
		const m = today.getMonth() - date.getMonth();
		if (m < 0 || (m === 0 && today.getDate() < date.getDate())) {
			age--;
		}
		return age;
	};

	return (
		<div
			className="grid grid-cols-2 lg:grid-cols-12 grid-rows-6"
			id="aboutme"
		>
			<div className="col-start-1 col-span-2 lg:col-start-1 lg:col-span-8 row-start-1 row-span-6 lg:pt-10">
				<h3 className="hidden lg:block text-2xl lg:text-5xl font-bold mb-14">About me</h3>
				<div className="hidden lg:block p-8 border border-slate-100 bg-white/50 backdrop-blur-lg drop-shadow-lg rounded-2xl relative z-20">
					<h2 className="text-2xl font-semibold mb-9">Who is Bryan?</h2>
					<p className="text-sm lg:text-base mb-8">
						<span className="mr-1">
							Hello! I&apos;m Bryan Berger, a { getAgeFromDate(birthDate) } years old web developer from France.
							Passionate about automation, optimization and efficiency, I love to learn new ways to solve problems and find answers to every needs.
							I&apos;m also passionate about teaching and sharing my knowledge with others. That&apos;s why I created
						</span>
						<Button
							className="font-bold text-base p-0 h-fit"
							variant="link"
							asChild
						>
							<Link
								href="https://youtube.com/@atomicreact"
								target="_blank"
							>
								Atomic React
							</Link>
						</Button>
						<span>, a YouTube channel specialized in React and its ecosystem, for helping people to improve their skills and learn new things.</span>
					</p>
					<p className="text-sm lg:text-base">
						<span className="mr-1">I also love the concept of behind the open-source idea. The most of my projects are open-source, under MIT lisense, and available on my</span>
						<Button
							className="font-bold text-base p-0 h-fit"
							variant="link"
							asChild
						>
							<Link
								href="https://github.com/BryanBerger98"
								target="_blank"
							>
								GitHub
							</Link>
						</Button>
						<span> profile. Check out below to see my main projects.</span>
					</p>
				</div>
			</div>
			<div className="col-start-1 col-span-2 lg:col-start-8 lg:col-span-4 row-start-1 row-span-5">
				<div className="w-fit h-fit rounded-2xl drop-shadow-lg">
					<Image
						alt="Bryan Berger"
						className="rounded-2xl relative z-10"
						height={ 400 }
						src={ bryanJpg }
						width={ 400 }
					/>
				</div>
			</div>
		</div>
	);
};

export default AboutMe;