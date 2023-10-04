import { Layers } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const Footer = () => {

	const currentYear = new Date().getFullYear();

	return (
		<footer className="container m-auto px-8">
			<Separator orientation="horizontal" />
			<div className="grid grid-cols-12 pt-8 pb-16">
				<div className="col-start-1 col-span-6 flex flex-col justify-between items-start">
					<Link
						className="flex items-center gap-4"
						href="/"
					>
						<Layers size="64" />
						<span className="flex flex-col">
							<span className="text-4xl font-semibold">Bryan Berger</span>
							<span className="text-lg">© { currentYear }</span>
						</span>
					</Link>
					<Button
						variant="link"
						asChild
					>
						<Link href="/legal-notice">
							Legal Notice
						</Link>
					</Button>
				</div>
				<nav className="col-start-7 col-span-3">
					<ul>
						<li>
							<Button
								variant="link"
								asChild
							>
								<Link
									href="/"
									scroll={ false }
								>
									Who is Bryan?
								</Link>
							</Button>
						</li>
						<li>
							<Button
								variant="link"
								asChild
							>
								<Link href="/">
									Projects
								</Link>
							</Button>
						</li>
						{ /* <li>
								<Button variant="link" asChild>
									<Link href="/">
										Tools
									</Link>
								</Button>
							</li> */ }
					</ul>
				</nav>
				<nav className="col-start-10 col-span-3">
					<ul>
						<li>
							<Button
								variant="link"
								asChild
							>
								<Link
									href="https://youtube.com/@atomicreact"
									target="_blank"
								>
									YouTube
								</Link>
							</Button>
						</li>
						<li>
							<Button
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
						</li>
						<li>
							<Button
								variant="link"
								asChild
							>
								<Link
									href="https://linkedin.com/in/bryanbrg"
									target="_blank"
								>
									LinkedIn
								</Link>
							</Button>
						</li>
					</ul>
				</nav>
			</div>
		</footer>
	);
};

export default Footer;