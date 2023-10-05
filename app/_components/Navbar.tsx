'use client';

import { Layers } from 'lucide-react';
import Link from 'next/link';

import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from '@/components/ui/navigation-menu';

const Navbar = () => {

	return (
		<nav className="flex justify-between items-center p-4 lg:p-6 border border-slate-100 bg-white/50 backdrop-blur-lg drop-shadow-sm rounded-2xl">
			<Link
				className="text-base lg:text-3xl flex items-center gap-2 lg:gap-4"
				href="/"
			>
				<Layers className="h-4 w-4 lg:h-8 lg:w-8" />
				<span className="font-semibold">Bryan Berger</span>
			</Link>
			<NavigationMenu>
				<NavigationMenuList>
					<NavigationMenuItem className="hidden lg:inline-flex">
						<Link
							href="#aboutme"
							legacyBehavior
							passHref
						>
							<NavigationMenuLink
								className={ navigationMenuTriggerStyle({ className: 'bg-transparent hover:bg-white' }) }
							>
								Who is Bryan?
							</NavigationMenuLink>
						</Link>
					</NavigationMenuItem>
					<NavigationMenuItem className="hidden lg:inline-flex">
						<Link
							href="#projects"
							legacyBehavior
							passHref
						>
							<NavigationMenuLink className={ navigationMenuTriggerStyle({ className: 'bg-transparent hover:bg-white' }) }>
								Projects
							</NavigationMenuLink>
						</Link>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<Link
							href="https://linkedin.com/in/bryanbrg"
							target="_blank"
							legacyBehavior
							passHref
						>
							<NavigationMenuLink
								className={ navigationMenuTriggerStyle({ className: 'bg-primary !text-primary-foreground hover:bg-primary/90' }) }
								target="_blank"
							>
								Work with me
							</NavigationMenuLink>
						</Link>
					</NavigationMenuItem>
				</NavigationMenuList>
			</NavigationMenu>
		</nav>
	);
};

export default Navbar;